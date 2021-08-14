import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import logo from '../images/logo.svg'; // gives image path
import {Link} from '@reach/router';
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
            {/* <Link>
            
            </Link>
            <Link>
            
            </Link>
            <Link>
            
            </Link> */}
            <button onClick={() => scrollTo("#work")}>Our Tips</button>
            <button onClick={() => scrollTo("#about")}>About Us</button>
            <button onClick={() => scrollTo("#contact")}>Contact Us</button>
            <Link to="/ContactUs">
            Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
