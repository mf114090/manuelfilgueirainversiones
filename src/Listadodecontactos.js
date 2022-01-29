import React from "react";
import { Link } from 'react-router-dom'; 
import MenuAdm from "./Components/MenuAdm";

    

const Listadodecontactos = () => {
    return (
        <>
            {/* menu de opciones del administrador o usuario */}
            <div className="menu">
                <MenuAdm />
            </div>
            
            <div className="navbar bg-light text-dark mb-3">
                
                    <div className="col-md-11"> 
                        
                                                
                        <h3 className=" text-center">Lista de contactos</h3>
                        
                        
                    
                    </div>
                    
                    
                    <div className="col-md-1"> 
                    
                                               
                        <Link to="/Crearcontacto">
                            <span className="btn btn-primary mb-0 fs-6 ">Crear Contacto</span>
                        </Link> 
                        
                        
                    
                    </div>
                
            </div>
         

            
                
                 
            
                
            




        </>
    );
}

export default Listadodecontactos;