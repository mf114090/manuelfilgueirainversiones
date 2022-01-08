
import React from "react";
import {Form} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";





const Contacto = () => {
    return (
        <div className="container">
            
            <div className="row row-cols-6 row-cols-md-2  text-dark p-5 ">
                <div className="col">
                    <div className="card h-100 border-white " >
                        <Form>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="Nombre" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="Telefono" placeholder="+56 9 1234 5678" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="email@example.com" />
                            </Form.Group>
                                                       
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                        </Form>
                        <Link to= "/News">				
					        <span className=" text-dark mb-0 fs-4">Enviar</span>
				        </Link> 
                    </div>
                </div> 
                <div className="col">
                    <div className="card h-100 border-white text-center" >
                        <div className="icon" style={{fontSize: "30px" }}>
                            <FontAwesomeIcon icon={faMobile} />
                                <h4 className="card-title">+56 9 6435 1264</h4>
                                <h4 className="card-title">+56 9 6457 9090</h4>
                           
                            <FontAwesomeIcon icon={faEnvelope} />
                                <h5 className="card-title">inmueblelaurbina@gmail.com</h5>
                                <h5 className="card-title">rah.santiagocentro@gmail.com</h5>
                            
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <h5 className="card-title">Av. Manquehue sur 520 oficina 205</h5>
                                <h5 className="card-title">Las Condes </h5>
                                {/* <h5 className="card-title">Region Metropolitana</h5> */}
                                <h5 className="card-title">Santiago</h5>
                            
                            </div>
                        </div>
                        
                </div>   

            </div>

            
        </div>
    );
}
export default Contacto;