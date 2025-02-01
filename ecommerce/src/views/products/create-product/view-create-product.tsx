import { useState } from "react";
import { httpAxiosClient } from "../../../http/axios-client/http-axios-client";

const CreateProduct = () => {
  const [productName, setProductName] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [productOlderPrice, setProductOlderPrice] = useState<string>("");
  const [productPromotion, setProductPromotion] = useState<boolean>(false);
  const [productEmAlta, setProductEmAlta] = useState<boolean>(false);

  const clientHttp = httpAxiosClient();

  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProductImage(e.target.files[0]);
    }
  };

  const createProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("product_name", productName);
    formData.append("product_description", productDescription);
    formData.append("product_price", productPrice);
    formData.append("product_quantity", productQuantity);
    formData.append("product_category", productCategory);
    formData.append("product_image", productImage as Blob); 
    formData.append("product_older_price", productOlderPrice);
    formData.append("product_promotion", String(productPromotion));
    formData.append("product_em_alta", String(productEmAlta));

    const token = localStorage.getItem('token');
    if (!token) {
        console.error('Token não encontrado no local storage');
        return;
    }

    try {
        const response = await clientHttp.post('http://127.0.0.1:8000/api/v1/dash/products', formData, {
            headers: {
                "Content-Type": "multipart/form-data", 
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 201) {
            fetchProducts();
        }
    } catch (error) {
        console.error('Erro ao criar produto:', error);
    } finally {
        limparFormulario();
    }
};

  const limparFormulario = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductQuantity('');
    setProductCategory('');
    setProductImage(null);
    setProductOlderPrice('');
    setProductPromotion(false);
    setProductEmAlta(false);
  };
  const token = localStorage.getItem('token');
  console.log(`Bearer ${token}` )
  const fetchProducts = async () => {
    const token = localStorage.getItem('token');
    

    if (!token) {
      console.error('Token não encontrado no local storage');
      return;
    }

    try {
      const response = await clientHttp.get('http://127.0.0.1:8000/api/v1/dash/products', {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full mx-10 my-5">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cadastrar Produto
        </h2>
        <form onSubmit={createProduct}>
          <div className="form-controll flex gap-5">
            <div className="w-1/2">
              <div className="mb-4">
                <label htmlFor="productName" className="block text-gray-700">
                  Nome do produto
                </label>
                <input
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Nome do produto"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productDescription"
                  className="block text-gray-700"
                >
                  Descrição do produto
                </label>
                <input
                  id="productDescription"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="Descrição do produto"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="productImage" className="block text-gray-700">
                  Imagem do produto
                </label>
                <input
                  id="productImage"
                  type="file"
                  onChange={handleImageChange}
                  className="mt-1 block w-full text-gray-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="productPrice" className="block text-gray-700">
                  Preço do produto
                </label>
                <input
                  id="productPrice"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  placeholder="Preço do produto"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="mb-4">
                <label
                  htmlFor="productOlderPrice"
                  className="block text-gray-700"
                >
                  Preço antigo do produto
                </label>
                <input
                  id="productOlderPrice"
                  value={productOlderPrice}
                  onChange={(e) => setProductOlderPrice(e.target.value)}
                  placeholder="Preço do produto"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productQuantity"
                  className="block text-gray-700"
                >
                  Quantidade do produto
                </label>
                <input
                  id="productQuantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  placeholder="Quantidade do produto"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="productCategory"
                  className="block text-gray-700"
                >
                  Categoria do produto
                </label>
                <input
                  id="productCategory"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  placeholder="Categoria do produto"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4 flex gap-2">
                <label
                  htmlFor="productPromotion"
                  className="block text-gray-700"
                >
                  O produto está em promoção?
                </label>
                <input
                  id="productPromotion"
                  type="checkbox"
                  checked={productPromotion}
                  onChange={(e) => setProductPromotion(e.target.checked)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
              <div className="mb-4 flex gap-2">
                <label htmlFor="productEmAlta" className="block text-gray-700">
                  O produto está em alta?
                </label>
                <input
                  id="productEmAlta"
                  type="checkbox"
                  checked={productEmAlta}
                  onChange={(e) => setProductEmAlta(e.target.checked)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mt-8">
            <button
              type="submit"
              className="bg-primaryColor text-white px-8 py-2 rounded-xl"
            >
              Cadastrar produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
