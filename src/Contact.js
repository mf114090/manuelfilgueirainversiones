import { Link } from 'react-router-dom'; 


import Imagenwhatsapp from "./img/imagenwhatsapp.png";
import Instagram from "./img/instagram.png";
import Facebook from "./img/facebook.png";

const Contact = () => {
    return (
        <div classNameName="container">
            <div classNameName="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div classNameName="card">
                        <img src="Imagenwhatsapp" className="card-img-top" alt="..."/>
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="Instagram" className="card-img-top" alt="..."/>
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>








        </div>
    )
}

export default Contact;