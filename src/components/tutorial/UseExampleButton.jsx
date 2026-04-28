import { useNavigate } from "react-router-dom";

const matrixSize = (matrix) => ({
  rows: matrix?.length || 1,
  cols: matrix?.[0]?.length || 1,
});

const normalizeMatrix = (matrix) =>
  matrix.map((row) => row.map((value) => String(value)));

const UseExampleButton = ({
  operation,
  matrixA,
  matrixB,
  scalar = "",
  children = "Usar este exemplo na calculadora",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const state = {
      sizeA: matrixSize(matrixA),
      sizeB: matrixB ? matrixSize(matrixB) : { rows: 2, cols: 2 },
      matrixA: normalizeMatrix(matrixA),
      matrixB: matrixB ? normalizeMatrix(matrixB) : [["", ""], ["", ""]],
      scalar: String(scalar),
      operation,
    };

    localStorage.setItem("matrixState_v1", JSON.stringify(state));
    navigate("/");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-4 inline-flex w-full justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 sm:w-auto"
    >
      {children}
    </button>
  );
};

export default UseExampleButton;
