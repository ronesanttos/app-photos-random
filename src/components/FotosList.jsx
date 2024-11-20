import Foto from "./Foto"

const FotosList = ({ fotos , setFotoAmpliada}) => {
    return (
        <div className="album">
            {fotos && fotos.map((foto) => (
                <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada}/>
            ))}
        </div>
    )
}

export default FotosList
