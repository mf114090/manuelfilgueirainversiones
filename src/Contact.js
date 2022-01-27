// import { Link } from 'react-router-dom'; 
import Contacto from './Components/Contacto';

import imgcontacto from './img/imgcontacto.jpg'
import Menu from './Components/Menu';
import Footer from './Components/Footer';



const Contact = () => {
    return (
        <>
            <div className="menu">
                <Menu/>
            </div>
            <div className="contact">
                <div className="contact-body">
                    <div className="container-fluid text-center p-3">
                        <img src={imgcontacto} className="img-fluid" height="..." alt="..." />
                    </div>
                </div>
                <div className="contact-card p-3">
                        <Contacto/>
                </div>
                
                
            </div>
            <div className="footer ">
                    <Footer/>
            </div> 
        </>
            
            
        






        
    )
}

export default Contact;