import { Link } from 'react-router-dom'; 
import React from "react";
import Rentahousecl from "../img/rentahousecl.png";

const Menu = () => {
    return (
        <div className="navbar bg-light text-dark mb-3">
			<div className="container">
                
                <Link to="/">
					<img src={Rentahousecl} className="d-block w-75"   alt="..."/>
                    
				</Link> 
				<div className="ml-auto"> 
				<Link to="/Login">
					<span className="text-dark mb-0 fs-4">log in</span>
				</Link> | {" "}
				<Link to="/about">
					<span className="text-dark mb-0 fs-4">About Us</span>
				</Link> | {" "}
				<Link to= "/contact">				
					<span className=" text-dark mb-0 fs-4">Contact Us</span>
				</Link>| {" "}
                <Link to= "/News">				
					<span className=" text-dark mb-0 fs-4">News</span>
				</Link> 
                </div>
            </div>
        </div>
    )
}

export default Menu;
