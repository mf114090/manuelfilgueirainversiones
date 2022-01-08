import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faWhatsapp
  } from '@fortawesome/free-brands-svg-icons';

  const Rrss = () => {
    return (
        <div className="container">
            <div className="container-fluid text-black text-center text-black p-3">
                
                {/* <div className="md-auto"> */}
                    <h4>Siguenos en:</h4>
                
                    <a href ="https://www.facebook.com/manuelfilgueira.rah">
                        <span className="icon p-2 text-dark" style={{fontSize: "28px"}}>
                            <FontAwesomeIcon icon={faFacebook } />
                        </span>
                    </a> 
                    
                
                    
                    <a href="https://www.instagram.com/rentahousechile.oficial">
                        <span className="icon p-2 text-dark" style={{fontSize: "30px" }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </a> 

                    <a href="https://twitter.com/RAHSantiagoC">
                        <span className="icon p-2 text-dark" style={{fontSize: "30px" }}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </a> 

                    <a href="https://www.youtube.com/channel/UCYNmg3HbvoGPS0M_QlgwAhQ">
                        <span className="icon  p-2 text-dark" style={{fontSize: "30px" }}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </span>
                    </a> 
                    <a href="https://www.youtube.com/channel/UCYNmg3HbvoGPS0M_QlgwAhQ">
                        <span className="icon p-2 text-dark" style={{fontSize: "30px" }}>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </span>
                    </a> 
                    
                    
                {/* </div>  */}
            </div>
        </div> 
    );
 }

export default Rrss;