import { Link } from 'react-router-dom'; 
import React from "react";
import Rentahousecl from "../img/rentahousecl.png";

const MenuAdm = () => {
    return (
        <nav className="navbar bg-light text-dark mb-3 md-12">
			<div className="container-fluid">
                
                <div className='navbar-logo col-md-3'>
					<Link to="/DashBoard">
						<img src={Rentahousecl} className="d-block w-50"   alt="..."/>
					</Link>
                    
				</div>
				<div className="col-md-3"> 
				
										
					<Link to="/listadodecontactos">
						<span className="text-dark mb-0 fs-5 p-2">Contactos</span>
					</Link> 
					
					<Link to="/listadodepropiedades">
						<span className="text-dark mb-0 fs-5 p-2">Propiedades</span>
					</Link> 
					
					
					<Link to="/addpropiedad">
						<span className="text-dark mb-0 fs-5 p-2">Mensajes</span>
					</Link> 
					
					<Link to="/agentes">				
						<span className=" text-dark mb-0 fs-5 p-2">Agentes</span>
					</Link>   
					
					<Link to= "/">				
						<span className=" btn btn-danger text-white mb-0 fs-7 p-2">Salir</span>
					</Link>
					
					{/* <Link to="/Login">
						<span className="text-dark mb-0 fs-5 p-2">ingresar</span>
					</Link>   */}
					
                
				</div>
            </div>
        </nav>
    );
}

export default MenuAdm;