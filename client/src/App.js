import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import { getPosts } from './actions/posts';
import useStyles from './styles';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function ScrollableTabsButtonAuto() {
 
  

 
// }


const App = ()  => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
    <div className={classes.page}>
        <Container className={classes.bigContainerGlass} maxwidth="lg">
            <div className={classes.appBar}>
                <Typography className={classes.heading} variant="h3" align="center">My Class Events</Typography>
            </div>

            <div className={classes.root}>
            
            {/* <AppBar position="static" color="default">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
                <Tab label="CSCI 2400" {...a11yProps(0)} />
                <Tab label="MATH 2650" {...a11yProps(1)} />
                <Tab label="HIST 1101" {...a11yProps(2)} />
                <Tab label="GSWS 1101" {...a11yProps(3)} />
               
                
                <div className={classes.Fab}>
                <Fab color="primary" aria-label="add" className={classes.FabButton}>
                    <AddIcon />
                </Fab>
                </div>
                </Tabs>
            </AppBar> */}

            <TabPanel value={value} index={0}>
            <Grow in>
                <Container>
                    <div className={classes.smallContainerGlass}>
                        <div className={classes.postsContainer}>
                            <Posts setCurrentId={setCurrentId} />
                        </div>
                    </div>
                    
                </Container>
            </Grow>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Grow in>
                <Container>
                    <div className={classes.smallContainerGlass}>
                        <div className={classes.postsContainer}>
                            <Posts setCurrentId={setCurrentId} />
                        </div>
                    </div>
                    
                </Container>
            </Grow>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Grow in>
                <Container>
                    <div className={classes.smallContainerGlass}>
                        <div className={classes.postsContainer}>
                            <Posts setCurrentId={setCurrentId} />
                        </div>
                    </div>
                    
                </Container>
            </Grow>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <Grow in>
                <Container>
                    <div className={classes.smallContainerGlass}>
                        <div className={classes.postsContainer}>
                            <Posts setCurrentId={setCurrentId} />
                        </div>
                    </div>
                    
                </Container>
            </Grow>
            </TabPanel>
            {/* <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel> */}
            </div>

            {/* <Grow in>
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
            </Grow> */}
        </Container>
    </div>
    );
}

export default App;