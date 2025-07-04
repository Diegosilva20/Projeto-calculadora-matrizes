// src/components/common/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Extrai o `pathname` do objeto de localização
  const { pathname } = useLocation();

  // Usa o hook `useEffect` para executar um efeito colateral sempre que o `pathname` mudar
  useEffect(() => {
    // Rola a janela para o topo (coordenadas 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // O array de dependências garante que o efeito só rode quando a URL muda

  // Este componente não renderiza nada visualmente
  return null;
}

export default ScrollToTop;