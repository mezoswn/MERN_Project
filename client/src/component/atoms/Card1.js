import React from "react"
import { Link } from "@reach/router"
import Cookies from "js-cookie"
const Card1 = ({ heading, paragraph, imgUrl }) => {
  return (
    <div
      className="card"
      style={{
          width:"450px",
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>

        {Cookies.get("usertoken") !== undefined ?
                    (<Link
                        to="/thank-you"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Join
                      </Link>)  : ((<Link
                       to="/register"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn"
                     >
                       Join
                    </Link>))}


      </div>
    </div>
  )
}

export default Card1
