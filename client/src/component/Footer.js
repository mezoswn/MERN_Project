import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import {Link} from "@reach/router"
const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact Us</h1>
            
            <h2>{data.contactSubHeading}</h2>
            
          
          
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <Link to="/contact-us">
            <h3 style={{color:"black"}}>Chat With Us</h3>
            </Link>
            </Fade>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          <span>
            Made With <icon>❤</icon> by{" "}
            Golden Gym Team
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
