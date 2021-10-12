import { Link } from 'react-router-dom'; 

import Whatsapp from "./img/whatsapp.png";
import Instagram from "./img/instagram.png";

const Contact = ()=> {
    return (
        <div classname= "container">
            <div classname= "row row-cols-4 row-cols-md-4 ">
                <div classname="col">
                    <div classname="icono-whatsapp">
                        <a href="https://wa.me/56964351264">
                            <img src={Whatsapp} className="d-block w-20"   alt="..."/>
                            
                        </a> 
                    </div> 
                
              
                    <div classname="col">
                        <div classname="icono-instagram">
                            <a href="https://www.instagram.com/rentahousechile.oficial">
                                <img src={Instagram} className="d-block w-20"   alt="..."/>
                                
                            </a> 
                        </div> 
                    </div>
                </div> 
            </div>  





                


            
        </div>
    )
}

export default Contact;