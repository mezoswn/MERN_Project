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
                navigate('/')
            })
          

    }


    return (
        <div style={{ backgroundColor: "black", width: "auto", height: "auto", margin: '0 auto' }} >
           
            <Container style={{ backgroundImage: `url("https://i.pinimg.com/originals/7a/11/b9/7a11b9f739c130eed437d1a237cc3b7d.jpg")`, width: "700px", height: "1000px" }}>
                <div style={{}}>
                    
                    <LoginForm onSubmitProp={login} error={errors} />
                </div>
            </Container>
        </div>
    )
}

export default Login
