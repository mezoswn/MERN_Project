import React , { useEffect, useState }from 'react'
import {InputLabel,FormControl,Input,FormHelperText,Button,Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const UserForm = (props) => {
    const { initialTitle, initialPrice, onSubmitProp,error } = props;
    const [firstName, setFirstName] = useState(initialTitle);
    const [lastName, setLastName] = useState(initialPrice);
    const [email, setEmail] = useState(initialTitle);
    const [phoneNum, setPhoneNum] = useState(initialPrice);
    const [password, setPassword] = useState(initialPrice);
    


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName,email,phoneNum,password});
    }
    const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
const classes = useStyles();
    return (
        <>
        
<div>
    <form > 
       <FormControl>
                <InputLabel >First Name:</InputLabel>
                <Input   
                    type="text" 
                    name="firstName" value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
        </FormControl>
        
        <br/>
        <FormControl>
            
                <InputLabel >Last Name:</InputLabel>
                <Input   
                    type="text" 
                    name="lastName" value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
        </FormControl>
        <br/>
        <FormControl>
                <InputLabel >Email address:</InputLabel>
                <Input   
                    type="text" 
                    name="email" value={email} 
                    onChange={(e) => { setEmail(e.target.value) }} />
        </FormControl>
        <br/>
        <FormControl>
             <InputLabel>Password</InputLabel><br />
                 <Input 
                     type="text" 
                     name="Password" value={password} 
                     onChange={(e) => { setPassword(e.target.value) }} />
           </FormControl>
           <br/>
        <FormControl>
             <InputLabel>Phone Num :</InputLabel><br />
                 <Input 
                     type="text" 
                    name="phone" value={phoneNum} 
                    onChange={(e) => { setPhoneNum(e.target.value) }} />
           </FormControl>
           <br/><br/>
           
             <Button  className={classes.root} type="submit" >submit</Button>
             </form>
             </div>
             

             </>
    )
            }

export default UserForm