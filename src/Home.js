import React from "react";
import  Carrusel from "./Components/Carrusel";
import  Card  from "./Components/Card";
import Footer from "./Components/Footer";


const Home = ()=> {
    return (
        <div className="home-headers">
            <div className="container">
			 <Carrusel />
            </div>
            <div className="home-body">
                <div className="container">
                    <Card />
                    
    
                </div>
            </div> 
            <div className="Footer">
                <Footer />
                
            </div> 


             
                  
			
			
		</div>
        
    )
}

export default Home;