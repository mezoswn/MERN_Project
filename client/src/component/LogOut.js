import React from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const LogOut = () => {

    const logout = user => {
        axios.get('http://localhost:8000/api/logout', user)
            .then(res => {
                navigate("/new")
            })
    }


    return (
        <div>
        <button onClick={logout}>
            LogOut
        </button>
            
        </div>
    )
}

export default LogOut
