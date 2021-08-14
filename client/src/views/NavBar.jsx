import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import axios from 'axios';
import Cookies from 'js-cookie';
const NavBar = () => {

  const LogOut = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8000/api/logout')
      .then(res => {
        Cookies.remove('usertoken')
        navigate("/")
      });
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
              <strong onClick={LogOut}>Log out</strong>
            </Link>

          </li>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar
