import React from "react";
import MenuAdm from "./Components/MenuAdm";
import Footer from './Components/Footer';



const Administrador = () => {
   


    return (
        <>
            <div className="menu">
                <MenuAdm/>
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


export default Administrador;