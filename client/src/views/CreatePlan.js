import React from 'react'
import axios from 'axios'
import PlanForm from '../component/PlanForm'
import { navigate } from '@reach/router'
const CreatePlan = () => {
    
    const createplan = plan => {
        
        axios.post('http://localhost:8000/api/plan/new/'+ localStorage.getItem("thisId"), plan)
            .then(res => {
                navigate("/thank-you")
            })
    }
    return (
        <div style={{margin:"0 auto",width:"2000px" , height:"800px",backgroundColor:"white",border:'black solid 4px',borderRadius:"5px",backgroundImage:"url(https://img4.goodfon.com/wallpaper/nbig/8/4e/bodibilder-press-abs-muscle-myshtsy-poza-bodybuilder-vorkaut.jpg)"}}>
<h1 style={{color:"whitesmoke",fontFamily:"cursive"}}>More Informtion to do Plan </h1>
            <PlanForm onSubmitProp={createplan} />
        </div>
    )
}

export default CreatePlan
