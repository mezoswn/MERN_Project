import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Link, navigate } from "@reach/router"
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import axios from "axios"
const Header = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    const userId = Cookies.get('usertoken');
    axios.get(`http://localhost:8000/api/user/${userId}`)
    .then(res => {
      if(userId === undefined){
        setName("Hello");
      }
      else{
        setName(`${res.data.user.firstname}`); 
      }   
  })
    
  }, []);

  const LogOut = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8000/api/logout')
      .then(res => {
        Cookies.remove('usertoken')
        navigate("/login")
      });
  }
  
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>{name}, Welcome to GOLDEN GYM</h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              {/* <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1> */}
            </div>
          </Fade>
          <Fade bottom>
          <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            {Cookies.get("usertoken") === undefined ?
                    (<Link
                      // href={`mailto:${
                      //   data.contactEmail ? data.contactEmail : "admin@goldengym.com"
                      // }`}
                      to="/login"
                      className="primary-btn"
                    >
                      Login || Register
                    </Link>)  : ((<button
                      // href={`mailto:${
                      //   data.contactEmail ? data.contactEmail : "admin@goldengym.com"
                      // }`}
                      className="primary-btn"
                      onClick={LogOut}
                    >
                      Logout
                    </button>))}
          

          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
