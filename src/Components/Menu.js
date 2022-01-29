import { Link } from 'react-router-dom'; 
import React from "react";
import Rentahousecl from "../img/rentahousecl.png";

const Menu = () => {
    return (
        <div className="navbar bg-light text-dark mb-3">
			<div className="container-fluid">
                
                <div className='navbar-logo col-md-2 '>
					<img src={Rentahousecl} className="d-block w-75"   alt="..."/>
                    
				</div>
				<div className="col-md-4"> 
				
					<Link to="/">
						<span className="text-dark mb-0 fs-5 p-2">Inicio</span>
					</Link> 
					
					<Link to="/asesorias">
						<span className="text-dark mb-0 fs-5 p-2">Asesorias</span>
					</Link> 
					
					<Link to="/propiedades">
						<span className="text-dark mb-0 fs-5 p-2">Propiedades</span>
					</Link> 
					
					
					<Link to="/about">
						<span className="text-dark mb-0 fs-5 p-2">Nosotros</span>
					</Link> 
					
					<Link to="/news">				
						<span className=" text-dark mb-0 fs-5 p-2">Noticias</span>
					</Link>  
					
					<Link to= "/contact">				
						<span className=" text-dark mb-0 fs-5 p-2">Contacto</span>
					</Link>
					
					<Link to="/Login">
						<span className="text-dark mb-0 fs-5 p-2">ingresar</span>
					</Link> 
					
                
				</div>
            </div>
        </div>
    );
}

export default Menu;
