import { Link } from 'react-router-dom'; 
import React from "react";
import Rentahousecl from "../img/rentahousecl.png";

const Menu = () => {
    return (
        <div className="navbar bg-light text-dark mb-3">
			<div className="container">
                
                <div className='navbar-logo'>
					<img src={Rentahousecl} className="d-block w-75"   alt="..."/>
                    
				</div>
				<div className="ml-auto"> 
				
					<Link to="/">
					<span className="text-dark mb-0 fs-5 p-3">Inicio</span>
						
					</Link> 
					
					
					{/* <Link to="/Login">
						<span className="text-dark mb-0 fs-4">log in</span>
					</Link> | {" "} */}
					<Link to="/about">
						<span className="text-dark mb-0 fs-5 p-3">Nosotros</span>
					</Link> 
					<Link to= "/contact">				
						<span className=" text-dark mb-0 fs-5 p-3">Contacto</span>
					</Link>
					<Link to="/news">				
						<span className=" text-dark mb-0 fs-5 p-4">Noticias</span>
					</Link>  
                </div>
            </div>
        </div>
    );
}

export default Menu;
