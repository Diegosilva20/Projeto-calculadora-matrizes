// src/components/ui/ResultDisplay.jsx

// Função para formatar os números do resultado
const formatNumber = (value) => {
  const number = Number(value);

  // Se o valor não for um número, retorna N/A
  if (isNaN(number)) {
    return "N/A";
  }

  // Se o valor absoluto do número for maior ou igual a 100.000, formata em notação exponencial
  if (Math.abs(number) >= 100000) {
    return number.toExponential(2); // ex: 1.23e+5
  }

  // Caso contrário, formata com duas casas decimais
  return number.toFixed(2);
};

const ResultDisplay = ({ result }) => {
  // Se não houver resultado, não renderiza nada
  if (!result) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2 text-sm sm:text-base">Resultado</h3>
      <div
        className="grid gap-1 mx-auto max-w-[90vw] justify-center"
        style={{
          // Aumenta a largura mínima de cada coluna para acomodar números maiores
          gridTemplateColumns: `repeat(${result[0].length}, minmax(0, 80px))`,
        }}
      >
        {result.map((row, i) =>
          row.map((val, j) => (
            <div
              key={`result-${i}-${j}`}
              className="bg-gray-200 p-2 rounded text-center text-sm"
            >
              {/* Usa a nova função de formatação */}
              {formatNumber(val)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;