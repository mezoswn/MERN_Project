import React from "react";
import Header from '../component/Header';
import Work from '../component/Work';
import About from '../component/about';
import Skills from '../component/skills';
import Promotion from '../component/Promotion';
import Footer from '../component/Footer';
import Layout from "../component/layout"

export default function HomePage() {
  return (

    
    <>
<<<<<<< HEAD
        
      <Box display="flex" p={1} bgcolor="background.paper">
        <Box p={1} flexGrow={1}>
          <Card className={classes.root}>
            <CardHeader
              title="Our Value"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              Get fit with a membership to Golden Gym Palestine, located in Abu Shukhaydam, Birzeit. With our exceptional health club, you’ll reach your fitness goals in no time, whether you’re aiming to lose weight, flatten your abs or shred upper body muscles. 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                Our world-class fitness experts are always ready to provide workout tips and sound fitness advice. Members at Golden Gym Palestine enjoy a state-of-the-art workout facility, top-tier amenities and the best fitness options in the industry.
Golden Gym Palestine stocks the very latest cardio equipment, such as elliptical machines, stair climbers, rowers, treadmills and stationary bikes as well as a full sets of free weights and high tech strength training equipment.
We offer options for every fitness level, from beginning exercisers to elite athletes looking to sharpen their speed, agility, power and endurance. Our inspirational fitness experts can assist you with a low-impact workout designed specifically for seniors, or show you the right techniques for a high intensity workout for both men and women.
Talk with one of our personal training experts for a free fitness assessment, and he or she can map out a training program personalized to your abilities and goals. Or, stop in today to take our gym for a test drive

                </Typography>
                
              </CardContent>
            </Collapse>
          </Card>
        </Box>
        <Box p={35}>
          <Card className={classes.root}>
            <CardHeader
          
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Our Goals"
              
            />
      
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </Box>
=======
      <Layout>
        <Header></Header>
        <Work></Work>
        <About></About>
        <Skills></Skills>
        <Promotion></Promotion>
        <Footer></Footer>
      </Layout>
>>>>>>> 96701ed04005470b67be90c9ba96449c29c30d49
    </>
  );
}
