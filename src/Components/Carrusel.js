import React from "react";
// import Carrusel1 from "../img/carrusel1.jpg";
// import Carrusel2 from "../img/carrusel2.jpg";
// import Carrusel3 from "../img/carrusel3.jpg";

const Carrusel = () => {
    return (
        <div classNameName="container">

            <div classNameNameName="container-fluid">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            {/* <img src={Carrusel1} className="d-block w-flex" alt="..."/> */}
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            {/* <img src={Carrusel1} className="d-block w-flex" alt="..."/> */}
                        </div>
                        <div className="carousel-item">
                            {/* <img src={Carrusel1} className="d-block w-flex" alt="..."/> */}
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Carrusel;