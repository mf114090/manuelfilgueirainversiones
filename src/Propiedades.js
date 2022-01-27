import React from "react";
import Menu from './Components/Menu';
import Footer from './Components/Footer';

const Propiedades = ()=> {
    return (
        <>
            <div className="menu">
                <Menu/>
            </div>
            {/* <div className="contact">
                <div className="contact-body">
                    
                <h1>Noticias</h1>
                
            </div> */}
            <div className="footer ">
                    <Footer/>
            </div> 
        </>
    );
}

export default Propiedades;