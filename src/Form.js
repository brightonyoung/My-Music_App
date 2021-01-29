import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const Form = (props) => {
    return (
        <form noValidate autoComplete="off">
            <TextField required id="outlined-required" label="Username" type='text' />
            <br></br>
            <TextField id="outlined-required" required label="Password" type="password" />
            <br></br>
            <Button variant="contained" color="primary" size="large" onClick={props.onClick}>Login</Button>
        </form>
    )
}

export default Form;