import React from "react";
import  Jumbotrom  from "./Components/Jumbotrom";
import  Card  from "./Components/Card";
import Footer from "./Components/Footer";


const Home = ()=> {
    return (
        <div className="home-headers">
            <div className="container">
			 <Jumbotrom />
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