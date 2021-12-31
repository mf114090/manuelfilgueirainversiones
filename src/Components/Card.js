import React from "react";
// import imagen1 from "../img/imagen1.jpg";
import imagen2 from "../img/imagen2.jpg";
import imagen3 from "../img/imagen3.jpg";
import imagen4 from "../img/imagen4.jpg";
import "bootstrap/dist/css/bootstrap.css";

const Card = ()=> {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 text-dark">
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen3} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">Venta de Propiedades</h4>
                            <p className="card-text">¿Quieres vender tu propiedad?</p>
                            {/* <p className="card-text">Nosotros te asesoramos y te acompañamos durante todo el proceso!</p> */}
                            <p className="card-text">Te acompañamos desde el inicio del proceso de venta hasta la entrega material de la propiedad!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen4} className="card-img-top w-60" alt="..."/> 
                        <div className="card-body">
                            <h4 className="card-title">Arriendo de Propiedades</h4>
                            {/* <p className="card-text">¿Quieres colocar tu propiedad en arriendo? o ¿estas buscando una propiedad para Arrendar?</p> */}
                            <p className="card-text">Bien sea que quieras colocar tu propiedad en arriendo o que estes buscando una propiedad para arrendar nosotros te apoyamos!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                       <img src={imagen2} class="card-img-top" alt="..."/> 
                        <div className="card-body">
                            <h4 classname="card-title">Oportunidades de Inversión</h4>
                            {/* <p className="card-text">¿Buscas es invertir en una o varias propiedades que se paguen con el arriendo?</p> */}
                            <p className="card-text">Nosotros te asesoramos en todo lo que necesitas saber para invertir en propiedades que te dejen una rentabilidad sostenida, aumenten su plusvalía y que se paguen con el arriendo!</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="card h-100">
                       <img src={imagen1} class="card-img-top" alt="..."/> 
                        <div className="card-body">
                            <h4 className="card-title">Gestion de Documentos</h4>
                            <p className="card-text">Tramitar o buscar toda la documentacion que se requiere para un transaccion inmobiliaria puede ser algo complicado</p>
                            <p className="card-text">Nuestros asesores están altamente capacitados para tramitar y gestionar todos los documentos inherentes al proceso de venta o arriendo de tu propiedad</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                       <img src={imagen2} className="card-img-top" alt="..."/> 
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen3} class="card-img-top" alt="..."/> 
                        <div className="card-body">
                            <h5 classname="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>  */}



            </div>
        </div>
	);
}

export default Card;