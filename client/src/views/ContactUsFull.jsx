import React from "react";
<<<<<<< HEAD
import { Container } from '@material-ui/core';
import Chat from '../component/Chat';
import Map from './Map';
import ContactUs from './ContactUs';
import Box from '@material-ui/core/Box';
import Cookies from 'js-cookie';
import { Redirect, Router } from '@reach/router';

const ContactUsFull = () => {
  return (
    <>
      {Cookies.get('usertoken') === undefined ?
        <Redirect to='/' noThrow />

        :
        <div>
          <Container>

            <Box display="flex" p={1} bgcolor="background.paper">
              <Box p={1} flexGrow={1}>
                <ContactUs />
                <Chat />
              </Box>
              <Box p={1} >
                <Map />
              </Box>

            </Box>

          </Container>
        </div>
      }</>
=======
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
>>>>>>> 96701ed04005470b67be90c9ba96449c29c30d49
  );
};

export default ContactUsFull;
