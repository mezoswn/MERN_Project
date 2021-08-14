import React from "react";
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <br/>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Golden Gym
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {
  return (

    <Box sx={{   p: 0 }} component="footer" bgcolor="text.primary"  color="background.paper">
    <Typography variant="h6" align="center" gutterBottom>
      Golden Gym
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      Contact us:<br/>
      Email: GoldenGym@Gym.com <br/>
      Phone Number: +27234500944
    </Typography>
    <Copyright />
  </Box>
  
  );
};

export default Footer;
