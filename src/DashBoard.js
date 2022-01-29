import React from "react";
import MenuAdm from "./Components/MenuAdm";
import Footer from './Components/Footer';



const DashBoard = () => {
   


    return (
        <>
            <div className="menu">
                <MenuAdm/>
            </div>
            <div className="contact text-center">
                
                    
                <h1>dashboard</h1>
                
            </div>
            <div className="footer ">
                    <Footer/>
            </div> 
        </>
    );
}


export default DashBoard;