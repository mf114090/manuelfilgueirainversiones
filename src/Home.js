import React from "react";
import Carrusel from "./Components/Carrusel";
import Card from "./Components/Card";
// import Footer from "./Components/Footer";
// import Menu from "./Components/Menu";
import Banner from "./Components/Banner";
import Destacados from "./Components/Destacados";
import Footer from "./Components/Footer";


const Home = () => {
    return (
        <>
            
           
            <div className="home-headers">
                {/* <div className="container-fluid"> */}
                    <Carrusel />
                {/* </div> */}
            </div>
            
            <div className="home-card p-5 text-center ">
                                  
                <div className="card-body p-1 "> 
                    <Card />    
                </div>        
                
            </div>                          
           
            
            <div className="home-banner text-center ">
                <div className="container-fluid"> 
                    
                    <Banner />    
                </div>       
            </div>  

            <div className="home-banner text-center">
                <div className="container">
                     
                    
                    <Destacados />    
                </div>       
            </div>

            
           
            <Footer/>

        </>
        
        





    )
}

export default Home;