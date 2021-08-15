import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import LoginForm from '../component/LoginForm'
import axios from 'axios'
import Cookies from 'js-cookie'
import { navigate } from '@reach/router'

const Login = () => {
    const [errors, setErrors] = useState([]);
    const login = user => {
        axios.post('http://localhost:8000/api/login', user)
            .then(res => {
                console.log(res.data.User)
                Cookies.set('usertoken', res.data.User._id)
                localStorage.setItem('thisId', res.data.User._id);
                navigate('/home')
            })
          

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
