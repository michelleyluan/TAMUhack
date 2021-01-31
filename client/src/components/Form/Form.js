import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
    
const Form = () => {
    const [postData, setPostData] = useState({
        eventname: '', time: '', location: '', people: '', info: ''
    });
    const classes = useStyles();
    const handleSubmit = () =>  {

    }
    const clear = () =>  {

    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Add Event</Typography>
            <TextField 
                name="eventname" 
                variant="outlined" 
                label="Event Name" 
                fullWidth
                value={postData.eventname}
                onChange={(e) => setPostData({ ...postData, eventname: e.target.value })}
            />

            <TextField 
                name="time" 
                variant="outlined" 
                label="Time" 
                fullWidth
                value={postData.time}
                onChange={(e) => setPostData({ ...postData, time: e.target.value })}
            />  

            <TextField 
                name="location" 
                variant="outlined" 
                label="Location" 
                fullWidth
                value={postData.location}
                onChange={(e) => setPostData({ ...postData, location: e.target.value })}
            />  

            <TextField 
                name="people" 
                variant="outlined" 
                label="People" 
                fullWidth
                value={postData.people}
                onChange={(e) => setPostData({ ...postData, people: e.target.value })}
            />  


            <TextField 
                name="info" 
                variant="outlined" 
                label="Info and Notes" 
                fullWidth
                value={postData.info}
                onChange={(e) => setPostData({ ...postData, info: e.target.value })}
            />  

            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                Submit
            </Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} type="submit" fullWidth>
                Clear
            </Button>

            </form>
        </Paper>
    );
}

export default Form;