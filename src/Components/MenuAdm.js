import { Link } from 'react-router-dom'; 
import React from "react";
import Rentahousecl from "../img/rentahousecl.png";

const MenuAdm = () => {
    return (
        <div className="navbar bg-light text-dark mb-3">
			<div className="container-fluid">
                
                <div className='navbar-logo col-md-2'>
					<img src={Rentahousecl} className="d-block w-75"   alt="..."/>
                    
				</div>
				<div className="col-md-4"> 
				
										
					<Link to="/listacontacto">
						<span className="text-dark mb-0 fs-5 p-2">Propiedades</span>
					</Link> 
					
					<Link to="/listapropiedades">
						<span className="text-dark mb-0 fs-5 p-2">Contactos</span>
					</Link> 
					
					
					<Link to="/addpropiedad">
						<span className="text-dark mb-0 fs-5 p-2">Mensajes</span>
					</Link> 
					
					<Link to="/agentes">				
						<span className=" text-dark mb-0 fs-5 p-2">Agentes</span>
					</Link>   
{/* 					
					<Link to= "/contact">				
						<span className=" text-dark mb-0 fs-5 p-2">Contacto</span>
					</Link>
					
					<Link to="/Login">
						<span className="text-dark mb-0 fs-5 p-2">ingresar</span>
					</Link>  */}
					
                
				</div>
            </div>
        </div>
    );
}

export default MenuAdm;