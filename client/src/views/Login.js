import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import { width } from '@material-ui/system'
import LoginForm from '../component/LoginForm'
import axios from 'axios'
import Cookies from 'js-cookie'
import { navigate } from '@reach/router'

const Login = () => {
    const [errors, setErrors] = useState([]);
<<<<<<< HEAD
    const login = user => {
        axios.post('http://localhost:8000/api/login', user)
            .then(res => {
                Cookies.set('usertoken', res.data.User._id)
                localStorage.setItem('thisId', res.data.user._id);
                navigate('/home')
            })
          
=======
const login= user=>{
    axios.post('http://localhost:8000/api/login',user)
        .then(res=>
            {Cookies.set('useID',res.data.User._id)
            
            navigate('/')}
            )
            .catch(err=>{
                console.log(err.response)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })        
>>>>>>> 96701ed04005470b67be90c9ba96449c29c30d49

    }


    return (
        <div style={{ backgroundColor: "black", width: "auto", height: "auto", margin: '0 auto' }} >
            <Container style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Gold%27s_Gym_logo.svg/1200px-Gold%27s_Gym_logo.svg.png")`, width: "1200px", height: "1200px" }}>
                <div style={{}}>
                    <LoginForm onSubmitProp={login} error={errors} />
                </div>
            </Container>
        </div>
    )
}

export default Login
