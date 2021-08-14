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
        <div>
            <PlanForm onSubmitProp={createplan} />
        </div>
    )
}

export default CreatePlan
