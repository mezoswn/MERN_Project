import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { Link } from "@reach/router"
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import axios from "axios"
const Header = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    const userId = Cookies.get('useID');
    axios.get(`http://localhost:8000/api/user/${userId}`)
    .then(res => {
      setName(`${res.data.user.firstname}`);    
  })
    
  }, []);
  
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
            {Cookies.get("useID") === undefined ?
                    (<Link
                      // href={`mailto:${
                      //   data.contactEmail ? data.contactEmail : "admin@goldengym.com"
                      // }`}
                      to="/login"
                      className="primary-btn"
                    >
                      Login || Register
                    </Link>)  : ((<Link
                      // href={`mailto:${
                      //   data.contactEmail ? data.contactEmail : "admin@goldengym.com"
                      // }`}
                      to="/logout"
                      className="primary-btn"
                    >
                      Logout
                    </Link>))}
          

          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
