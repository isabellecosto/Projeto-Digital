import "./Select.scss"

const Select = () => {
    return (
        <select name="select" id="select" className="p-2 border-solid ">
            <option value="0" disabled>Ordenar por:</option>
            <option value="1"> Ordenar por: Mais relevantes</option>
            <option value="2"> Ordenar por: Menor preço</option>
            <option value="3"> Ordenar por: Maior preço</option>
        </select>
    );
}

export default Select;