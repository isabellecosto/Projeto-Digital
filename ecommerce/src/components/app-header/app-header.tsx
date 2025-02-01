import LogoDigital from "../../assets/images/logo-digital.png";
import IconSearch from "../../assets/images/Search.png";
import Button from "../button/Button";
import Cart from "../../assets/images/cart.png";
import "./app-header.scss";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="mx-20 my-5">
      <div className="flex justify-between">
        <img src={LogoDigital} className="w-[270px]" alt="Logo da digital College" />
        <div className="flex w-[40rem] bg-secondaryColor p-4 rounded-lg border-color">
          <input
            className="w-full bg-transparent focus:outline-none "
            type="text"
            placeholder="Pesquisar produto..."
          />
          <img
            className="w-[20px] h-[10-px]"
            src={IconSearch}
            alt="icone de pesquisa"
          />
        </div>
        <div className="flex gap-20 items-center">
          <div className="flex gap-10 items-center">
            <a href="#">Cadastre-se</a>
            <Button text="Entrar" styleButton="bg-primaryColor text-white px-8 py-2 rounded-xl" />
          </div>
          <a href="#">
            <img src={Cart} alt="Carrinho de compras" />
          </a>
        </div>
      </div>
      <div className="mt-[30px]">
        <nav className="flex gap-10">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "text-primaryColor font-bold navlink" : "text-black")} >Home</NavLink>
          <NavLink to="/products" end className={({ isActive }) => (isActive ? "text-primaryColor font-bold navlink" : "text-black")}>Produtos</NavLink>
          <NavLink to="/requests" className={({ isActive }) => (isActive ? "text-primaryColor font-bold navlink" : "text-black")}>Meus Pedidos</NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-primaryColor font-bold navlink" : "text-black")}>Carrinho </NavLink>
          <NavLink to="/create-product" className={({ isActive }) => (isActive ? "text-primaryColor font-bold navlink" : "text-black")}>Cadastrar Produto</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default AppHeader;
