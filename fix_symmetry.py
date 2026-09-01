filepath_home = r"C:\Users\depau\Projetos\Projeto-calculadora-matrizes\src\pages\Home.jsx"
with open(filepath_home, "r", encoding="utf-8") as f:
    content = f.read()

# Fix Matrix A container
content = content.replace('<div className="w-full max-w-xs">', '<div className="w-full flex-1 min-w-0 max-w-xs">')

# Fix Matrix B container
content = content.replace('<div className="w-full flex-1 min-w-0">', '<div className="w-full flex-1 min-w-0 max-w-xs">')

# Swap button vertical alignment: Add pt-14 on desktop to align with the matrices (since legends + size takes space)
# Wait, let's just make it items-center
# Currently: flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 mb-8
content = content.replace('flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 mb-8', 'flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 mb-8')

# Center the swap button vertically in stretch mode:
content = content.replace('<div className="flex justify-center my-4 lg:my-0 lg:px-4 shrink-0">', '<div className="flex justify-center my-4 lg:my-0 lg:px-4 shrink-0 self-center">')

with open(filepath_home, "w", encoding="utf-8") as f:
    f.write(content)
print("Symmetry fixed")
