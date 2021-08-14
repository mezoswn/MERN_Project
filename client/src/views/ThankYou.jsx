import React from "react";
import "../styles/Styles.css";
import { Link } from "@reach/router";
import { Button, Container } from "@material-ui/core";

import Navbar from "../component/Navbar";
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import axios from "axios"

const ThankYou = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    const userId = Cookies.get('useID');
    axios.get(`http://localhost:8000/api/user/${userId}`)
    .then(res => {
      setName(`${res.data.user.firstname}`);    
  })
    
  }, []);

  return (
    <>
    <Navbar></Navbar>
    <Container>
      
      <Container className="thankyou-page">
        <Container className="_header">
          <Container className="logo">
            <img src="../images/gatsby-astronaut.png" alt="" />
          </Container>
        </Container>
      </Container>
      <Container className="_body">
        <Container className="_box">
          <h2>
            <strong>
              Thank you {name} for your time, We will contact you soon. <br />
              Golden Gym Team
            </strong>
            
          </h2>
          <p>
                Thank you for Chosen Our Service.<br/>
                We will be in touch with you within 24Hr

          </p>
        </Container>
      </Container>

      <Container className="_footer">
      <Link to="/contact-us">
        <Button variant="outlined" color="primary" >
          Having trouble? Contact us
        </Button>
        </Link>
        <Link className="btn" to="/home">
          <Button variant="outlined" color="primary">Back to homepage</Button>
        </Link>
      </Container>
    </Container>
    </>
  );
};

export default ThankYou;
