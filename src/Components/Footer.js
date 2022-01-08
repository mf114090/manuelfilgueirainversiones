import React from "react";
// import { Link } from "react-router-dom";
import Rrss from "./Rrss";
// import Rentahousecl from "../img/rentahousecl.png";;



const Footer = () => {
    return (
        <div className="container-fluid bg-light text-center">
           
            <div className="row row-cols-1 row-cols-md-6  text-dark p-5 ">
                <div className="col-md-8">
                    {/* <div className="card h-100  text-center bg-light border-light" >
                        <img src={Rentahousecl} className="d-block w-50"   alt="..."/>
                                 
                    </div> */}
                </div>
                <div className="col-md-1">
                    {/* <div className="card h-100 bg-light border-light ">
                        
                        <Link to="/">
                            <ul className="text-dark ">Inicio</ul>						
                        </Link> 
                        <Link to="/about">
                            <ul className="text-dark ">Nosotros</ul>
                        </Link> 
                        <Link to= "/contact">				
                            <ul className=" text-dark">Contacto</ul>
                        </Link>
                        <Link to="/news">				
                            <ul className=" text-dark">Noticias</ul>
                        </Link> 
                        
                    </div> */}
                </div>
                <div className="col-md-3 bg-light border-light">
                    
                       
                        <Rrss/>
                    
                </div>
            </div>
        </div>
	);
}

export default Footer;