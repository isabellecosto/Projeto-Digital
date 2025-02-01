import products from "../../composable/fake-list-products";
import Promotion from "../promotion/Promotion";

const ListProducts = () => {
  return (
    <div>
      {products.map((product, index) => (
        <div className="w-[292px] h-[439px]" key={index}>
          <div className="w-full h-[321px] bg-white">
            {product.promotion ? <Promotion promoText="30% off" /> : ""}
            <img src={product.image} alt="Imagem do produto" />
          </div>
          <p>{product.product}</p>
          <p>{product.description}</p>
          <div>
            <p>{product.olderPrice}</p>
            <p>{product.newPrice}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ListProductsEmAlta = () => {
  const productsEmAlta = products.filter((produto) => produto.emAlta);

  return (
    <div className="grid grid-cols-4 gap-6">
      {productsEmAlta.map((product, index) => (
        <div className="w-[102%] h-[40%]" key={index}>
          <div className="w-full h-[321px] bg-white drop-shadow-lg rounded flex flex-col items-center justify-center gap-5">
            <div className="w-full px-5">{product.promotion ? <Promotion promoText="30% off" /> : ""}</div>
              <img
                src={product.image}
                alt="Imagem do produto"
                className="w-4/5 h-[230px] flex justify-center p-1/2"
              />
          </div>
          <div className="flex flex-col gap-2">
              <p className="text-xs font-bold mt-2 text-lightGrey1">{product.product}</p>
              <p className="text-2xl text-darkGray2">{product.description}</p>
              <div className="flex gap-2">
                <p className="text-xl text-lightGrey1 line-through">{product.olderPrice}</p>
                <p className="text-xl font-bold">{product.newPrice}</p>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ListProducts, ListProductsEmAlta };
