import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lida com as mudanças no título da página
 *
 * @param {string} pageTitle
 * @returns {void}
 */
function updatePageTitle(pageTitle: string): void {
  document.title = `${pageTitle} :: Prime Data`;
}

/**
 * Componente para alterar o título da página baseado na rota
 *
 * @param {object} props
 * @param {Record<string, string>} props.titles - Mapeamento de títulos por caminho
 * @returns JSX.Element
 */
const PageTitleGuard: React.FC<{ titles: Record<string, string> }> = ({ titles }) => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = titles[location.pathname];
    if (pageTitle) {
      updatePageTitle(pageTitle);
    }
  }, [location.pathname, titles]);

  return null; // Este componente não renderiza nada visível
};

export default PageTitleGuard;
