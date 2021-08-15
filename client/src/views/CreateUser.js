import { navigate } from '@reach/router'
import React, { useState } from 'react'
import axios from 'axios'
import UserForm from '../component/UserForm'
import Cookies from "js-cookie"

const CreateUser = () => {
    const [errors , serErrors]=useState([]);

    const createusererson = user => {
        
        axios.post('http://localhost:8000/api/register/new', user)
            .then(res => {
                Cookies.set('usertoken',res.data.user._id)
                localStorage.setItem('thisId', res.data.user._id);
                navigate("/")
            }).catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                serErrors(errorArr);
            })
            

    }



    return (
        <div style={{margin:"0 auto",width:"2000px" , height:"800px",backgroundColor:"white",border:'black solid 4px',borderRadius:"5px",backgroundImage:"url(https://img4.goodfon.com/wallpaper/nbig/d/5a/bodybuilding-bodibilder-weight-training-muscles-bodybuilder.jpg)"}}>
           
            {errors.map((err,index)=> <p key={index}>{err}</p>)}
            <UserForm onSubmitProp={createusererson} />

        </div>
    )
}

export default CreateUser




