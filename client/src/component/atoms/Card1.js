import React from "react"
import { Link } from "@reach/router"
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import axios from "axios"
const Card1 = ({ heading, paragraph, imgUrl, projectLink }) => {
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

        {Cookies.get("useID") !== undefined ?
                    (<Link
                        to="/thank-you"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Join
                      </Link>)  : ((<Link
                       to="/new"
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
