import React, { useState } from 'react'
import { InputLabel, FormControl, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




const PlanForm = (props)  => {

    const { onSubmitProp } = props;
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [condtions, setCondtions] = useState("");
    const [goal, setGoal] = useState("");
    

    const onSubmitHandler = e=> {
        e.preventDefault();
        onSubmitProp({ weight, height, age, condtions, goal });
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

            <div style={{backgroundColor:"white",width:"500px" ,height:"500px" ,margin:"0 auto",marginTop:"200px", borderRadius:"10px",backgroundImage:`url(https://library.kissclipart.com/20180902/wyq/kissclipart-fitness-logo-vector-png-clipart-fitness-centre-phy-77840a10541d02e8.png)`}}>
                <form onSubmit={onSubmitHandler}>
                    <FormControl>
                        <InputLabel >Weight/KG:</InputLabel>
                        <Input
                            
                            type="number"
                            name="weight" value={weight}
                            onChange={(e) => { setWeight(e.target.value) }} />
                    </FormControl>

                    <br />
                    <FormControl>

                        <InputLabel >Height/M:</InputLabel>
                        <Input
                            type="number"
                            name="height" value={height}
                            onChange={(e) => { setHeight(e.target.value) }} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel >Age:</InputLabel>
                        <Input
                            type="number"
                            name="age" value={age}
                            onChange={(e) => { setAge(e.target.value) }} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel>Condtions(Allergy):</InputLabel><br />
                        <Input
                            type="text"
                            name="condtions" value={condtions}
                            onChange={(e) => { setCondtions(e.target.value) }} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel>Goal :</InputLabel><br />
                        <Input
                            type="text"
                            name="goal" value={goal}
                            onChange={(e) => { setGoal(e.target.value) }} />
                    </FormControl>
                    <br /><br />

                    <Button className={classes.root} type="submit" >submit</Button>
                </form>
            </div>


        </>
    )
}


export default PlanForm