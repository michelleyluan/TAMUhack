import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

    
const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        eventname: '', time: '', location: '', people: '', info: ''
    });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ eventname: '', time: '', location: '', people: '', info: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        clear();

    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h5" className={classes.formHeader}>{currentId ? `Editing "${post.eventname}"` : 'Add New Event'}</Typography>

            <TextField 
                name="eventname" 
                variant="outlined" 
                label="Event Name" 
                fullWidth
                multiline
                // InputLabelProps={{
                //     shrink: true,
                // }}
                value={postData.eventname}
                onChange={(e) => setPostData({ ...postData, eventname: e.target.value })}
            />

            <TextField 
                name="time" 
                variant="outlined" 
                label="Time" 
                fullWidth
                multiline
                // InputLabelProps={{
                //     shrink: true,
                // }}
                value={postData.time}
                onChange={(e) => setPostData({ ...postData, time: e.target.value })}
            />  

            <TextField 
                name="location" 
                variant="outlined" 
                label="Location" 
                fullWidth
                multiline
                // InputLabelProps={{
                //     shrink: true,
                // }}
                value={postData.location}
                onChange={(e) => setPostData({ ...postData, location: e.target.value })}
            />  

            <TextField 
                name="people" 
                variant="outlined" 
                label="People" 
                fullWidth
                multiline
                // InputLabelProps={{
                //     shrink: true,
                // }}
                value={postData.people}
                onChange={(e) => setPostData({ ...postData, people: e.target.value })}
            />  


            <TextField 
                name="info" 
                variant="outlined" 
                label="Info and Notes" 
                fullWidth
                multiline
                // InputLabelProps={{
                //     shrink: true,
                // }}
                value={postData.info}
                onChange={(e) => setPostData({ ...postData, info: e.target.value })}
            />  

            <div className={classes.buttonRow}>
                <Button 
                    className={[classes.button, classes.buttonSave].join(' ')} variant="contained" size="large" type="submit" fullWidth disableElevation>
                    Save
                </Button>
                <Button className={[classes.button, classes.buttonClear].join(' ')} variant="contained" color="secondary" size="large" onClick={clear} fullWidth disableElevation>
                    Clear
                </Button>
            </div>



            </form>
        </Paper>
    );
}

export default Form;