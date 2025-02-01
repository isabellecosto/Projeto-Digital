import { RouteObject } from "react-router";
import { createBrowserRouter, Navigate } from "react-router";
import ViewDashboard from "../views/dashboard/view-dashboard";
import Home from "../views/home/view-home";
import Cart from "../views/cart/view-cart";
import Products from "../views/products/view-products";
import Request from "../views/request/view-request";
import CreateProduct from "../views/products/create-product/view-create-product";
import Login from "../views/login/view-login";

const isAuthenticated = () => {
  return !!localStorage.getItem("token"); 
};

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
  },
  {
    path: '/products',
    element: (
      <AuthGuard>
        <Products />
      </AuthGuard>
    ),
  },
  {
    path: '/requests',
    element: (
      <AuthGuard>
        <Request />
      </AuthGuard>
    ),
  },
  {
    path: '/cart',
    element: (
      <AuthGuard>
        <Cart />
      </AuthGuard>
    ),
  },
  {
    path: '/create-product',
    element: (
      <AuthGuard>
        <CreateProduct />
      </AuthGuard>
    ),
  },
];

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <AuthGuard>
        <ViewDashboard />
      </AuthGuard>
    ),
    children: appRoutes,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
];

const router = createBrowserRouter(routes);

export default router;
