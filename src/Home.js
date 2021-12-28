import React from "react";
import Carrusel from "./Components/Carrusel";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";


const Home = () => {
    return (
        <>
            
           
            <div className="home-headers">
                <div className="container-fluid">
                    <Carrusel />
                </div>
            </div>
            
            <div className="home-card p-5 text-center">
                <div clasName="container">
                    <div className="titulo p-5">
                        <h1>Nuestros Servicios</h1>
                    </div>
                    <div className="card-body">
                        <Card />
                    </div>
                    
                </div>
            
            </div>



            

        </>





    )
}

export default Home;