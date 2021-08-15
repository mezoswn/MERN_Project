import React, {useState } from 'react'
import { InputLabel, FormControl, Input, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


export default props => {
    const { onSubmitProp } = props;
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [msg, setMsg] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();
        if (confirmPassword != password) {
            setMsg("ConfimPassword must match!")
        } else {
            onSubmitProp({ firstname, lastname, email, phoneNum, password, confirmPassword });

        }

    }



    const useStyles = makeStyles({
        root: {
            background: 'black',
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

            <div style={{margin:"0 auto",width:"500px" }}>
                
           
                {msg}
                <form onSubmit={onSubmitHandler} style={{backgroundColor:"white",width:"500px" ,height:"500px" ,margin:"0 auto",marginTop:"200px", borderRadius:"10px",backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0tVoVTXMSdF7XJj1lNS5nrsjC7Xbn7CZ9A&usqp=CAU)`}}>
                <h1 style={{fontFamily:'fantasy'}}>Register</h1>
                    <FormControl >
                        <InputLabel >First Name:</InputLabel>
                        <Input 
                            type="text"
                            name="firstname" value={firstname}
                            onChange={(e) => { setFirstName(e.target.value) }} />
                    </FormControl>

                    <br />
                    <FormControl>

                        <InputLabel  >Last Name:</InputLabel>
                        <Input 
                            type="text"
                            name="lastname" value={lastname}
                            onChange={(e) => { setLastName(e.target.value) }} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel >Email address:</InputLabel>
                        <Input
                            type="text"
                            name="email" value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </FormControl>
                    <br />

                    <FormControl>
                        <InputLabel>Phone Num :</InputLabel><br />
                        <Input
                            type="number"
                            name="phone" value={phoneNum}
                            onChange={(e) => { setPhoneNum(e.target.value) }} />
                    </FormControl>

                    <br />
                    <FormControl>
                        <InputLabel>Password</InputLabel><br />
                        <Input
                            type="Password"
                            name="Password" value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel>Confirm Password</InputLabel><br />
                        <Input
                            type="password"
                            name="confirmPassword" value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </FormControl>
                    <br /><br />

                    <Button className={classes.root} type="submit" >submit</Button>
                    {/* <input type="submit"/> */}

                </form>
            </div>


        </>
    )
}

// export default UserForm