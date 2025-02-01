import React from "react";
import { NavLink } from "react-router";
import Slide from "../../components/slide/Slide";

import Blusa from "../../assets/images/blusa.png";
import HeadPhone from "../../assets/images/headphone.png";
import Tenis from "../../assets/images/teniscollection.png";
import Shoes from "../../assets/images/sapatos.png";
import Sapato from "../../assets/images/sapat.png"
import Phone from "../../assets/images/fhone.png"
import Calca from "../../assets/images/calca.png"
import Camiseta from "../../assets/images/shirt.png"

import Card from "../../components/card/Card";
import { ListProductsEmAlta } from "../../components/list-products/ListProducts";
import Button from "../../components/button/Button";
import Category from "../../components/category/Category";

import "./view-home.scss";

const Home: React.FC = () => {
  return (
    <div>
      <Slide />
      <section className="flex flex-col py-12 px-32 bg-lightGrey">
        <div className="flex flex-col gap-10">
          <p className="font-bold text-2xl">Coleções em Destaque</p>
          <div className="flex gap-2">
            <Card
              promoText="30% off"
              title="Novo drop Supreme"
              src={Blusa}
              textButton="Comprar"
              styleButton="bg-white text-primaryColor font-bold px-6 py-3 rounded-xl w-[158px] h-[48px]"
            ></Card>
            <Card
              promoText="30% off"
              title="Coleção Adidas"
              src={Tenis}
              textButton="Comprar"
              styleButton="bg-white text-primaryColor font-bold px-6 py-3 rounded-xl w-[158px] h-[48px]"
            ></Card>
            <Card
              promoText="30% off"
              title="Novo Beats Bass"
              src={HeadPhone}
              textButton="Comprar"
              styleButton="bg-white text-primaryColor font-bold px-6 py-3 rounded-xl w-[158px] h-[48px]"
            ></Card>
          </div>
        </div>
        <div className="flex flex-col gap-8 my-12 items-center justify-center">
        <p className="font-bold text-2xl">Coleções em Destaque</p>
          <div className="flex gap-8">
            <Category src={Camiseta} text="Camisetas" />
            <Category src={Calca} text="Calças" />
            <Category src={Calca} text="Bonés" />
            <Category src={Phone} text="Headphones" />
            <Category src={Sapato} text="Tênis" />
          </div>
        </div>
        <div className="flex flex-col gap-10 my-10">
          <div className="flex justify-between">
            <p className="font-bold text-xl">Produtos em Alta</p>
            <NavLink
              to="/products"
              className={
                "flex text-center items-center text-primaryColor gap-2"
              }
            >
              Ver Todos{" "}
              <i className="pi pi-arrow-right" style={{ fontSize: "12px" }} />
            </NavLink>
          </div>
          <ListProductsEmAlta />
        </div>
      </section>
      <section className="my-20 px-32 flex gap-20">
        <div className="shoes">
          <img src={Shoes} alt="Sapatos" className="w-[900px] h-[330px]" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-primaryColor font-bold">Oferta Especial</p>
          <p className="text-darkGray2 font-bold text-6xl">Air Jordan edição de colecionador</p>
          <p className="text-darkGray2 text-base w-[586px] h-[112px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <Button
            text="Ver Oferta"
            styleButton="bg-primaryColor text-white font-bold px-6 py-3 w-[250px] rounded-xl "
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
