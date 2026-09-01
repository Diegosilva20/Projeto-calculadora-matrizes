import os

path = 'src/pages/Home.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Title
content = content.replace(
    'const pageHeroTitle = "Calculadora de Matrizes Online Gratuita";',
    'const pageHeroTitle = "Calculadora de Matrizes com Passo a Passo";'
)

# 2. Add Icons
content = content.replace(
    'import { FaDownload } from "react-icons/fa";',
    'import { FaDownload, FaShareAlt, FaCheck } from "react-icons/fa";'
)

# 3. Add isCopied state
content = content.replace(
    'const [isExporting, setIsExporting] = useState(false);',
    '''const [isExporting, setIsExporting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);'''
)

# 4. Add handleShare function
handle_export = '''const handleExportPDF = async () => {'''
handle_share = '''const handleShare = () => {
    const params = new URLSearchParams();
    params.set('op', operation);
    if (scalar) params.set('s', scalar);
    params.set('A', encodeURIComponent(JSON.stringify(matrixA)));
    if (operationsWithMatrixB.includes(operation)) {
      params.set('B', encodeURIComponent(JSON.stringify(matrixB)));
    }
    const shareUrl = ${window.location.origin}?;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleExportPDF = async () => {'''
content = content.replace(handle_export, handle_share)

# 5. Add Share Button next to PDF button
pdf_btn_block = '''<button
                  onClick={handleExportPDF}
                  disabled={isExporting}
                  className="flex items-center gap-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 transition-colors hover:bg-emerald-200 dark:hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                >
                  <FaDownload />
                  {isExporting ? "Gerando PDF..." : "Baixar Resolução em PDF"}
                </button>'''

share_and_pdf_btns = '''<button
                  onClick={handleShare}
                  className="flex items-center gap-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-400 transition-colors hover:bg-blue-200 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {isCopied ? <FaCheck /> : <FaShareAlt />}
                  {isCopied ? "Link Copiado!" : "Compartilhar"}
                </button>
                <button
                  onClick={handleExportPDF}
                  disabled={isExporting}
                  className="flex items-center gap-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 transition-colors hover:bg-emerald-200 dark:hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
                >
                  <FaDownload />
                  {isExporting ? "Gerando PDF..." : "Baixar Resolução"}
                </button>'''

content = content.replace(
    'Baixar Resolu\\u00e7\\u00e3o em PDF',
    'Baixar Resolução'
)
# We might need to deal with unicode replacement
content = content.replace(
    'Baixar Resolu\xe7\xe3o em PDF',
    'Baixar Resolução'
)
# Instead of exact replacement, let's just regex or find the button container
import re
pattern = r'<button[^>]*onClick=\{handleExportPDF\}[^>]*>.*?</button>'
match = re.search(pattern, content, re.DOTALL)
if match:
    old_btn = match.group(0)
    new_btns = share_and_pdf_btns.replace('Baixar Resolução', 'Baixar Resolução')
    content = content.replace(old_btn, new_btns)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Home.jsx updated!')
