import React from "react";
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
  );
};

export default ContactUsFull;
