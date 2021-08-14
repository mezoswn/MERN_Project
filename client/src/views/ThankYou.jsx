import React from "react";
import "../styles/Styles.css";
import { Link } from "@reach/router";
import { Button, Container } from "@material-ui/core";

const ThankYou = () => {
  return (
    <Container>
      <Container className="thankyou-page">
        <Container className="_header">
          <Container className="logo">
            <img src="https://codexcourier.com/images/banner-logo.png" alt="" />
          </Container>
        </Container>
      </Container>
      <Container className="_body">
        <Container className="_box">
          <h2>
            <strong>
              Thank you for your time, We will contact you soon. <br />
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
  );
};

export default ThankYou;
