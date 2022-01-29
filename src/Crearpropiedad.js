import React from "react";
import {Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import MenuAdm from './Components/MenuAdm';
// import Footer from './Components/Footer';
import { Button } from "react-bootstrap";


const Crearpropiedad = () => {
    return (
        <>
           
            
                <div className="container p-5">
                    <div className="card ">
                        <div className="card-header text-center">
                            <h4>Ingresar Nueva Propiedad</h4>
                        </div>
                        <div className="card-body " > 
                            <div className="container">
                                <h2 className="text-center"><strong>Datos del Propietario</strong></h2>
                            </div>
                                
                                <Form>
                                    <Form.Group className="mb-2 " Id="name">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 " Id="lastname">
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control type="Text" placeholder="Apellido" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" Id="phone">
                                        <Form.Label>Telefono</Form.Label>
                                        <Form.Control type="phone" placeholder="+56 9 1234 5678" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" Id="email">
                                        <Form.Label>Correo</Form.Label>
                                        <Form.Control type="email" placeholder="email@example.com" />
                                    </Form.Group>
                                </Form>
                                
                                
                                
                                
                                
                                <Button className=" btn btn-success  " type="submit" value="save"> Guardar</Button>
                                <Link to="/Listadodepropiedades">
                                    <span className="btn btn-danger mx-2  text-white  fs-7 p-2">Regresar</span>
                                </Link> 
                            </div> 
                        
                        
                        
                           
                            
                             
                           
                         
                    </div>
                </div>    
           
                
            




        </>
    );
}

export default Crearpropiedad;