import { Link } from 'react-router-dom'; 
const Menu = () => {
    return (
        <div className="navbar navbar-dark bg-dark text-white mb-3">
			<div className="container">
                <Link to ="/">Home</Link> | {" "} 
                <Link to ="/About">About</Link> | {" "}
                <Link to ="/Contact">Contact</Link> | {" "}
                <Link to ="Noticias">Noticias</Link>   
            </div>
        </div>


    )
}

export default Menu;