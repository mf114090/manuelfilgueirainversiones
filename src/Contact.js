import { Link } from 'react-router-dom'; 


import Whatsapp from "./img/whatsapp.png";
import Instagram from "./img/instagram.png";
import Facebook from "./img/facebook.png";

const Contact = ()=> {
    return (
        <div className= "container">
            <div className= "row row-cols-4 row-cols-md-4 ">
                <div className="col">
                    <div className="fab fa-instagram">
                        <a href="https://wa.me/56964351264">
                            <img src={Whatsapp} className="d-block w-20"   alt="..."/>
                            
                        </a> 
                       
                    </div>
                </div> 
                
              
                <div classname="col">
                    <div classname="icono-instagram">
                        <a href="https://www.instagram.com/rentahousechile.oficial">
                                <img src={Instagram} className="d-block w-20"   alt="..."/>
                                
                        </a> 
                    </div> 
                </div>        
               

                <div classname="col">
                     <div classname="icono-instagram">
                        <a href="https://www.facebook.com/Rent-A-House-Chile-3496566590398567">
                            <img src={Facebook} className="d-block w-20"   alt="..."/>
                                
                        </a> 
                    </div> 
                </div>
               
            
            
            
            
            
            
            </div>  





                


            
        </div>
    )
}

export default Contact;