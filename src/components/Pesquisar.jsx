
const Pesquisar = ({ setQuery, setCategoty, setSearch }) => {
    const categorias = ["Natureza", "Pessoas", "Tecnologia", "Animais", "Esportes"]
    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar fotos..." onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => setSearch(true)}>Pesquisar</button>
            <select onChange={(e) => {
                setCategoty(e.target.value)
                setSearch(true)
            }}>
                {categorias.map((categoria) => (
                    <option value={categoria} key={categoria}> {categoria}</option>
                ))}
            </select>
        </div>
    )
}

export default Pesquisar
