import React from "react";
import Carrusel3 from "../img/carrusel3.jpg";

const Jumbotrom = ()=> {
    return (
        <div id="carouselExampleCaptions" className=" mb-4" data-bs-ride="carousel">
            <div className="jumbotrom ">
                <div className="container-fluid">
                    <img src={Carrusel3} className="d-block w-100"  height="750" alt="..."/>
                      
                </div>
            </div>
        </div>
    )
}

export default Jumbotrom;