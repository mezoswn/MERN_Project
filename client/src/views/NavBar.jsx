import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from '@reach/router';
import LogOut from '../component/LogOut';
import { navigate } from '@reach/router';
import axios from 'axios';
const NavBar = () => {

  const logout = user => {
        
    axios.get('http://localhost:8000/api/logout', user)
        .then(res => {
            console.log("hi");
        })
}

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <Link className="navbar-brand" to="/home"><img src="../imgs/logo.png" height="300px" /></Link> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home"><strong>Home</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/programs"><strong>Programs</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us"><strong>Contact Us</strong></Link>
            </li>
            <li className="nav-item">
              
                <Link className="nav-link" to="/" >
                <strong onClick={logout}>Log out</strong>
                </Link>
      
            </li>
            {/* <li className="nav-item">
              <a className="nav-link disabled" to="#">Disabled</a>
            </li> */}
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
