import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faHandshake} from "@fortawesome/free-solid-svg-icons";
import {faMapMarked} from "@fortawesome/free-solid-svg-icons";

const Card = ()=> {
    return (
        <div className="container">
            <h1 className="titulo p-5">Nuestros Servicios</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-dark p-5">
                <div className="col">
                    <div className="card h-100 border-white" >
                      
                        <div className="icon" style={{fontSize: "60px" }}>
                            <FontAwesomeIcon icon={faHandshake} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Venta de Propiedades</h4>
                            <p className="card-text">¿Quieres vender tu propiedad?</p>
                            <p className="card-text">Te acompañamos desde el inicio del proceso de venta hasta la entrega material de la propiedad!</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-white">
                        <div className="icon" style={{fontSize: "60px" }}>
                            <FontAwesomeIcon icon={faHome} />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Arriendo de Propiedades</h4>
                            <p className="card-text">Bien sea que quieras colocar tu propiedad en arriendo o que estes buscando una propiedad para arrendar nosotros te apoyamos!</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-white">
                        <div className="icon" style={{fontSize: "60px" }}>
                            <FontAwesomeIcon icon={faMapMarked} />
                        </div>
                            <div className="card-body">
                            <h4 classname="card-title">Oportunidades de Inversión</h4>
                            <p className="card-text">Nosotros te asesoramos en todo lo que necesitas saber para invertir en propiedades que te dejen una rentabilidad sostenida, aumenten su plusvalía y que se paguen con el arriendo!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Card;