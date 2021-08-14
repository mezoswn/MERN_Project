import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from '../images/logo.svg'; // gives image path
import {Link} from '@reach/router';
import { Router } from "@reach/router";
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            <img src={logo} height="150px" alt="this is car image" />
            
          </div>
          <div className="links-wrapper">
            <Link to="/#tips">

            <button onClick={() => scrollTo("#tips")}>Our Tips</button></Link>

            <Link to="/#about"><button onClick={() => scrollTo("#about")}>About Us</button></Link>
            <Link to="/programs">
            <button >Programs</button>
            </Link>
            
            
 
            <button onClick={() => scrollTo("#contact")}>Contact Us</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
