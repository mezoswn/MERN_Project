import React from "react";
import { FormControl, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact us:</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary">Send</Button>
      </FormControl>
    </div>
  );
};

export default ContactUs;
