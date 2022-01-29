import React from "react";
// import {Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import MenuAdm from './Components/MenuAdm';
// import Footer from './Components/Footer';
import { Button } from "react-bootstrap";


const Crearpropiedad = () => {
    return (
        <>
           
            
                <div className="container p-5">
                    <div className="card" >
                        <div className="card-header text-center">
                            <h4>Ingresar Nueva Propiedad</h4>
                        </div>
                        <div className="card-body md-12 " > 
                            
                                <h2 className="text-center"><strong>Datos del Propietario</strong></h2>
                            
                                
                                
                                <form className="row g-3">
                                    <div className="col-md-4">
                                        <label for="inputName" className="form-label">Nombre</label>
                                        <input  className="form-control" type="text"id="name"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputLastname" className="form-label">Apellido</label>
                                        <input type="text" className="form-control" id="Lastname" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputRut" className="form-label">R.U.T.</label>
                                        <input type="text" className="form-control" id="rut" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputPhone" className="form-label">Telefono</label>
                                        <input  className="form-control" type="phone"id="phone"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputEmail4" className="form-label">Email</label>
                                        <input  className="form-control" type="email"id="inputEmail4"/>
                                    </div>
                                    
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress2" className="form-label">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputState" className="form-label">State</label>
                                        <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>Santiago</option>
                                        <option>Las Condes</option>
                                        <option>Vitacura</option>
                                        <option>Ñuñoa</option>
                                        <option>La Reina</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label for="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                    
                                   
                                </form>
                                
                                <h2 className="text-center "><strong>Datos de la Propiedad</strong></h2>
                                
                                <form className="row g-3">
                                   
                                    <div className="col-12">
                                        <label for="inputAddress" className="form-label">Direccion 1</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Calle, Avenida, Pasaje, numero" />
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress2" className="form-label">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="piso, departmento " />
                                    </div>
                                     <div className="col-md-4">
                                        <label for="inputState" className="form-label">Comuna</label>
                                        <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                        </select>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <label for="inputCity" className="form-label">Ciudad</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                   
                                    <div className="col-md-2">
                                        <label for="inputCountry" className="form-label">Pais</label>
                                        <input className="form-control" type="text"  id="Country" />
                                    </div>
                                   
                                    <div className="col-md-2">
                                        <label className="form-label"for="inputDormitorios" >Mts2 Totales</label>
                                        <input className="form-control"type="number"  id="inputCity" />
                                    </div>
                                    <div className="col-md-2">
                                        <label for="inputBath" className="form-label">Mts2 Utiles</label>
                                        <input className="form-control"type="number"  id="baño" />
                                    </div>

                                    <div className="col-md-2">
                                        <label className="form-label"for="inputDormitorios" >Dormitorios</label>
                                        <input className="form-control"type="number"  id="inputCity" />
                                    </div>
                                    <div className="col-md-2">
                                        <label for="inputBath" className="form-label">Baños</label>
                                        <input className="form-control"type="number"  id="baño" />
                                    </div>
                                    <div className="col-md-2">
                                        <label for="inputCity" className="form-label">Estacionamientos</label>
                                        <input className="form-control" type="number" id="estacionamiento" />
                                    </div>
                                    <div className="col-md-2">
                                        <label for="inputCity" className="form-label">Bodegas</label>
                                        <input className="form-control" type="number"  id="Bodega" />
                                    </div>
                                    <div class="mb-3">
                                    <label className="form-label" for="exampleFormControlTextarea1"> Descripcion</label>
                                        <textarea class="form-control" id="Textarea" rows="3"></textarea>
                                    </div>
                                    










                                   
                                </form>
                                                                    
                                                                
                                                                
                                                                
                                
                                
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