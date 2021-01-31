import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts'
    
const Form = () => {
    const [postData, setPostData] = useState({
        eventname: '', time: '', location: '', people: '', info: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>  {
        e.preventDefault();

        dispatch(createPost(postData));
    }
    const clear = () =>  {

    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h5" className={classes.formHeader}>Add New Event</Typography>
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

            <div className={classes.buttonRow}>
                <Button className={[classes.button, classes.buttonSave].join(' ')} variant="contained" size="large" type="submit" fullWidth disableElevation>
                    Save
                </Button>
                <Button className={[classes.button, classes.buttonClear].join(' ')} variant="contained" color="secondary" size="large" onClick={clear} type="submit" fullWidth disableElevation>
                    Clear
                </Button>
            </div>



            </form>
        </Paper>
    );
}

export default Form;