import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
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
        <div className={classes.page}>
            <Container className={classes.bigContainerGlass}maxwidth="lg">
                <div className={classes.appBar}>
                    <Typography className={classes.heading} variant="h3" align="center">My Class Events</Typography>
                </div>

                <Grow in>
                    <Container>
                        <div className={classes.smallContainerGlass}>
                            <div className={classes.postsContainer}>
                                <Posts setCurrentId={setCurrentId} />
                            </div>
                        </div>
                        
                    </Container>
                </Grow>
            </Container>
        </div>
        
    );
}

export default App;