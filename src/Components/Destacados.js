import React from "react";
import imagen1 from "../img/imagen1.jpg";
import imagen2 from "../img/imagen2.jpg";

import imagen4 from "../img/imagen4.jpg";
import "bootstrap/dist/css/bootstrap.css";


const Destacados = ()=> {
    return (
        <div className="container">
            <h1 className="titulo mt-5 p-3">Propiedades Destacadas</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 text-dark p-5">
                <div className="col">
                    <div className="card h-100" >
                        <img src={imagen2} class="card-img-top" alt="..."/> 
                        <div className="card-body">
                            <h4 className="card-title">Venta de Propiedades</h4>
                            <p className="card-text">¿Quieres vender tu propiedad?</p>
                            
                            <p className="card-text">Te acompañamos desde el inicio del proceso de venta hasta la entrega material de la propiedad!</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen4} className="card-img-top w-60" alt="..."/>  
                        <div className="card-body">
                            <h4 className="card-title">Arriendo de Propiedades</h4>
                            
                            <p className="card-text">Bien sea que quieras colocar tu propiedad en arriendo o que estes buscando una propiedad para arrendar nosotros te apoyamos!</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen2} class="card-img-top" alt="..."/>  
                        <div className="card-body">
                            <h4 classname="card-title">Oportunidades de Inversión</h4>
                           
                            <p className="card-text">Nosotros te asesoramos en todo lo que necesitas saber para invertir en propiedades que te dejen una rentabilidad sostenida, aumenten su plusvalía y que se paguen con el arriendo!</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                       <img src={imagen1} class="card-img-top" alt="..."/> 
                        <div className="card-body">
                            <h4 className="card-title">Gestion de Documentos</h4>
                            <p className="card-text">Tramitar o buscar toda la documentacion que se requiere para un transaccion inmobiliaria puede ser algo complicado</p>
                            </div>
                       
                    </div>
                </div>
                


            </div>
        </div>
	);
}

export default Destacados;