import * as React from 'react';
import Navbar from "../component/Navbar";
import Footer from '../component/Footer';
import Card1 from '../component/atoms/Card1'
import Fade from "react-reveal/Fade"

import data from "../yourdata"


export default function ProgramPage() {

  

  return (
    <>
    <Navbar></Navbar>
    <div className="section" id="work">
    <div className="container">
      <div className="work-wrapper">
        <Fade bottom>
          <h1>Discover Our Programs</h1>
        </Fade>

        <div className="grid">
          <Fade bottom cascade>
            {data.projects1.map((project1, index) => (
              <Card1
                key={index}
                heading={project1.title}
                paragraph={project1.para}
                imgUrl={project1.imageSrc}
                
              ></Card1>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
  </>
  );
}
