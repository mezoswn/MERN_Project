import React from "react"
import data from "../yourdata"
import { Link } from "@reach/router"
import Fade from "react-reveal/Fade"
const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Our Programs</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <Fade>
                <Link to="/programs">
                <h2 style={{color:"black", textDecoration:"none"}}>{skill.name}</h2>
                </Link>
                </Fade>

                
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
