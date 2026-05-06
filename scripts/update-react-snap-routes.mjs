import fs from "node:fs";
import { prerenderPaths } from "../src/data/seoRoutes.js";

const packageJsonPath = new URL("../package.json", import.meta.url);
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

packageJson.reactSnap = {
  ...(packageJson.reactSnap || {}),
  include: prerenderPaths,
};

fs.writeFileSync(
  packageJsonPath,
  `${JSON.stringify(packageJson, null, 2)}\n`,
);

console.log(`react-snap configurado com ${prerenderPaths.length} rotas.`);
