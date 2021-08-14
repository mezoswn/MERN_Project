import React from "react";
import { Container } from "@material-ui/core";
import Chat from "../component/Chat";
import Map from "./Map";
import ContactUs from "./ContactUs";
import Box from "@material-ui/core/Box";
// import NavBar from "./NavBar";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer";
const ContactUsFull = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Container>
          <Box display="flex" p={1} bgcolor="background.paper">
            <Box p={1} flexGrow={1}>
              <ContactUs />
              <Chat />
            </Box>
            <Box p={1}>
              <Map />
            </Box>
          </Box>
        </Container>
        <Footer></Footer>
    </div>
  );
};

export default ContactUsFull;
