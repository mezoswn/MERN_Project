  
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';






function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const LoginForm = (props) => {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

  const classes = useStyles();
  const onSubmitHandler = e =>{
    e.preventDefault();
    props.onSubmitProp({email,password})

  }

  return (
    <Container  component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar  style={{width:"200px",height:"150px"}} className={classes.avatar}>
        <img style={{backgroundColor: "white",borderRadius:"5pxs" }} src="/static/media/logo.17320619.svg" height="150px" alt="this is car image"></img>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <p>
            {props.error.map(
                (err,index)=> <p key={index}> {err}  </p>
            )} </p> 
        <form  onSubmit={onSubmitHandler} className={classes.form} noValidate>
          <TextField onChange={(e)=>{setEmail(e.target.value)}} style={{backgroundColor:"white" , borderRadius:"10px"}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            
          />
          <TextField onChange={(e)=>{setPassword(e.target.value)}}
          style={{backgroundColor:"white",borderRadius:"10px"}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button style={{backgroundColor:"black"}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link  href="/register"   variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    
  );
}
export default LoginForm