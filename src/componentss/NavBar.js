import React from "react";
import { Link } from "react-router-dom"
const NavBar = () =>{
    return(
       <div
        className="flex
        justify-between text-white
        p-5 bg-black">
            
            <div className="flex">
            <h1><Link to='/'>Home</Link></h1>
       
    
            
            <h1 className=" mx-5"><Link to='/about'>About Us</Link></h1>
            <h1 className="mr-60"><Link to='/career'>Careers</Link></h1>
            <h1 className="ml-20"><Link to='/contact'>Contact Us</Link></h1>
       </div>
       </div>
    );
};
export default NavBar;