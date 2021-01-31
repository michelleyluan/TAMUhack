import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';


const App = ()  => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxwidth="lg">
            <div className={classes.appBar}>
                <Typography className={classes.heading} variant="h3" align="center">My Class Events</Typography>
            </div>

            <Grow in>
                <Container>
                    <Grid container justify="space-around" alignItems="stretch" spacing={6}>
                        <Grid item xs = {12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>

                        <Grid item xs = {12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
        </Container>

    );
}

export default App;