import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../component/Navbar";
import Footer from '../component/Footer';
import Card1 from '../component/atoms/Card1'
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function ProgramPage() {

  const classes = useStyles();

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
    // <React.Fragment>
    //   <Navbar></Navbar>
    //   <main>
    //     {/* Hero unit */}
    //     <Box
    //       sx={{
    //         bgcolor: 'background.paper',
    //         pt: 8,
    //         pb: 6,
    //       }}
    //     >
    //     </Box>
    //     <Container sx={{ py: 8 }} maxWidth="md">
    //       {/* End hero unit */}
    //       <Grid container spacing={4}>
    //         {cards.map((card) => (
    //           <Grid item key={card} xs={12} sm={6} md={4}>
    //             <Card 
    //               sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    //             >
    //               <CardMedia
    //                 sx={{
    //                   // 16:9
    //                   pt: '56.25%',
    //                 }}
    //                 image="https://source.unsplash.com/random"
    //                 title="Image title"
    //               />
    //               <CardContent sx={{ flexGrow: 1 }}>
    //                 <Typography gutterBottom variant="h5" component="h2">
    //                   Heading
    //                 </Typography>
    //                 <CardMedia
    //                   className={classes.media}
    //                   image="https://www.olympicmuscle.com/wp-content/uploads/2019/09/6-day-gym-workout-schedule-.png"
                      
    //                   title="Paella dish"
    //                   />
    //                 <Typography>
    //                   This is a media card. You can use this section to describe the
    //                   content.
    //                 </Typography>
    //               </CardContent>
    //               <CardActions>
    //                 <Button size="small">Join</Button>
    //                 <Button size="small">Details</Button>
    //               </CardActions>
    //             </Card>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </Container>
    //   </main>
    //   <Footer></Footer>
    // </React.Fragment>
  );
}
