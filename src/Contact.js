// import { Link } from 'react-router-dom'; 
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';
import imgcontacto from './img/imgcontacto.jpg'



const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-body">
                <div className="container-fluid text-center">
                    <img src={imgcontacto} className="img-fluid" height="..." alt="..." />
                </div>
            </div>
            <div className="contact-card">
                    <Contacto/>
            </div>
            
            
        </div>
            
            
        






        
    )
}

export default Contact;