import Select from "../../components/select/Select";

const Products = () => {
    return(
        <div className="flex flex-col py-12 px-32 bg-lightGrey">
            <div className="flex justify-between">
                <p>Resultado para Tênis - 389 produtos</p>
                <Select />
            </div>
            <div className="flex">
                <div className="flex flex-col bg-white px-8 py-4 w-[305px]">
                    <div>
                        <p>Filtrar por</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Products;