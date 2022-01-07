import React from "react";
import Footer from "./Components/Footer";

import carrusel1 from "./img/carrusel1.jpg";
import carrusel3 from "./img/carrusel3.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import {faVrCardboard} from "@fortawesome/free-solid-svg-icons";


const About = () => {
    return (

        <div className="container">
            <div className="card mb-3 border-white" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={carrusel1} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Rent-A-House Chile</h3>
                            <p className="card-text">Somos una empresa de servicios inmobiliarios,
                                con catorce años de experiencia en el mercado chileno.</p>
                            <p className="card-text">Desde 2006 operamos en Chile, con un solo propósito: lograr una positiva experiencia en la venta y arriendo de propiedades.
                                En definitiva, generar un espacio de mutua y permanente confianza. Por eso tenemos clientes desde el inicio de nuestras actividades.</p>
                            <p className="card-text">Nos especializamos en la compra, venta y arriendo de propiedades nuevas y usadas, principalmente
                                en la zona oriente de Santiago.</p>

                        </div>
                    </div>
                </div>
            </div>



            <div className="card mb-3 border-white" >
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Nuestros Servicios</h3>
                            <ul className="card-text text">
                                <li className="card-text">Asesoria y orientación de mercado.</li>
                                <li className="card-text">Evaluación de precios.</li>
                                <li className="card-text">Promoción en los principales canales de internet.</li>
                                <li className="card-text">Análisis de riesgo en caso de arriendo.</li>
                                <li className="card-text">Negociación de los valores en el caso de venta.</li>
                                <li className="card-text">Preparación de Contratos de Arriendo e Inventarios.</li>
                                <li className="card-text">Promesas de Compraventa y Escrituras.</li>
                                <li className="card-text">Administración de propiedades.</li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={carrusel3} className="img-fluid rounded-start" alt="..." />
                    </div>


                </div>
            </div>
            <h1 className="titulo mt-5 p-5 text-center">Servicios Audiovisuales</h1>
                <div className="card-group">
                
                    
                    <div className="card text-center border-white">
                            <div className="icon" style={{fontSize: "60px" }}>
                                <FontAwesomeIcon icon={faCamera} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Sesion Fotografica</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card text-center border-white">
                            <div className="icon" style={{fontSize: "60px" }}>
                                <FontAwesomeIcon icon={faVideo} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Video Promosional</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    <div className="card text-center border-white">
                            <div className="icon" style={{fontSize: "60px" }}>
                                <FontAwesomeIcon icon={faVrCardboard} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Virtual Tour</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                    </div>
                    
                </div>







                <Footer/>


            

        </div>
        




    );
}

export default About;