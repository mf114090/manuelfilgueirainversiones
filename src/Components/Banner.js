import React from "react";

import bannerimg1 from "../img/bannerimg1.jpg";


const Banner = () => {
    return (
        <div className="banner-body p-5">
            <div className="container">
            
                <img src={bannerimg1} className="img-fluid" height="..." alt="..." />
                <h2 className="text-center">"Realiza el mejor negocio de tu vida y aprende uno de los negocios mas lucrativos del mundo acompañado de los que si conocen de inmuebles"</h2>
           </div>
        </div>
     );
}
export default Banner;