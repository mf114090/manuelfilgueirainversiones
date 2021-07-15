import { Link } from 'react-router-dom'; 
import React from "react";

const Menu = () => {
    return (
        <div className="navbar navbar-dark bg-dark text-white mb-3">
			<div className="container">
                
                <Link to="/">
					<span className="navbar-brand mb-0 fs2">Logo</span>
				</Link> 
				<div className="ml-auto"> 
				<Link to="/Login">
					<span className="navbar-brand mb-0 fs-2">About Us</span>
				</Link> | {" "}
				<Link to= "/contact">				
					<span className="navbar-brand mb-0 fs-2">Contact Us</span>
				</Link>| {" "}
                <Link to= "/contact">				
					<span className="navbar-brand mb-0 fs-2">News</span>
				</Link> 
                </div>
            </div>
        </div>
    )
}

export default Menu;
