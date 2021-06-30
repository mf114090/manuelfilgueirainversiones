import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <>
        <h1>Pagina no encontrada (404)</h1>
        <Link to = "/">Regresar a pagina Principal</Link> 
        </>
    )
}

export default Error404;