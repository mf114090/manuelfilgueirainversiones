import React from "react";
import { Link } from "react-router-dom";
import {Form} from 'react-bootstrap';
// import { Button } from "react-bootstrap";
import living from "./img/living.jpg";








const Login = () => {
   
   
    return (
        <>
            
      
            <div className="form-body p-5">
                <div className="img-fluid text-center">
                    <img src={living} className="img-fluid" height="" alt="..." />
                </div>
                <div className="container col-md-3 p-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Link to= "/Dashboard">
                            <span className="btn btn-success text-white mb-3 mx-2 fs-6 ">Ingresar</span>
                        </Link> 
                        <Link to= "/">
                            <span className="btn btn-warning text-dark mb-3 mx-2 text-center  fs-6 ">Regresar</span>
                        </Link> 
                        {/* <Button variant="primary" type="submit">
                        Ingresar
                        </Button> */}
                    </Form>
                </div>
            </div>
            
            
              
        </>
    )
}

export default Login;