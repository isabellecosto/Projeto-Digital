import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useLocalStorage } from '../../composable/use-localstorage/use-localstorage';

/**
 * Guard de navegação para verificar autenticação
 *
 * @returns JSX.Element
 */
const AuthGuard: React.FC = () => {
  const location = useLocation();
  const { data: token } = useLocalStorage<string>('token', '');

  if (!token) {
    // Redireciona para a página de login, preservando a localização atual para um redirecionamento posterior.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Caso autenticado, renderiza a rota protegida.
  return <Outlet />;
};

export default AuthGuard;
