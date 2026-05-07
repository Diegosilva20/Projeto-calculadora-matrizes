import fs from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const fileForRoute = (outDir, routePath) => {
  if (routePath === "/") {
    return path.join(outDir, "index.html");
  }

  return path.join(
    outDir,
    ...routePath.replace(/^\//, "").split("/"),
    "index.html",
  );
};

const applyHead = (template, head = {}) => {
  let html = template;

  if (head.lang) {
    html = html.replace(/<html([^>]*)lang="[^"]*"([^>]*)>/i, `<html$1lang="${escapeHtml(head.lang)}"$2>`);
  }

  if (head.title) {
    html = html.replace(/<title[^>]*>.*?<\/title>/is, `<title>${escapeHtml(head.title)}</title>`);
  }

  if (head.elements?.size) {
    html = html.replace("</head>", `${Array.from(head.elements).join("\n")}\n</head>`);
  }

  return html;
};

const applyBody = (template, body) => {
  const rootPattern = /<div id="root"\s*><\/div>/;

  if (!rootPattern.test(template)) {
    throw new Error('Nao foi possivel encontrar <div id="root"></div> em dist/index.html.');
  }

  return template.replace(rootPattern, `<div id="root">${body}</div>`);
};

export const ssrPrerenderPlugin = ({ routes }) => {
  let root;
  let outDir;

  return {
    name: "ssr-prerender-routes",
    apply: "build",
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(root, config.build.outDir);
    },
    async closeBundle() {
      const template = await fs.readFile(path.join(outDir, "index.html"), "utf8");
      const server = await createServer({
        appType: "custom",
        configFile: false,
        root,
        logLevel: "error",
        server: {
          middlewareMode: true,
        },
      });

      try {
        const { prerender } = await server.ssrLoadModule("/src/prerender.jsx");

        for (const routePath of routes) {
          const result = await prerender({ url: routePath });
          const renderedHtml =
            typeof result === "string"
              ? applyBody(template, result)
              : applyBody(applyHead(template, result.head), result.html);
          const filePath = fileForRoute(outDir, routePath);

          await fs.mkdir(path.dirname(filePath), { recursive: true });
          await fs.writeFile(filePath, renderedHtml);
        }
      } finally {
        await server.close();
      }
    },
  };
};
