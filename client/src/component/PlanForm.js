import React, { useEffect, useState } from 'react'
import { InputLabel, FormControl, Input, FormHelperText, Button, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';




const PlanForm = () => {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [age, setAge] = useState();
    const [condtions, setCondtions] = useState();
    const [goal, setGoal] = useState();


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
                        <InputLabel >Weight:</InputLabel>
                        <Input
                            type="text"
                            name="weight" value={weight}
                            onChange={(e) => { setWeight(e.target.value) }} />
                    </FormControl>

                    <br />
                    <FormControl>

                        <InputLabel >Height:</InputLabel>
                        <Input
                            type="text"
                            name="height" value={height}
                            onChange={(e) => { setHeight(e.target.value) }} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel >Age:</InputLabel>
                        <Input
                            type="text"
                            name="age" value={age}
                            onChange={(e) => { setAge(e.target.value) }} />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel>condtions</InputLabel><br />
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