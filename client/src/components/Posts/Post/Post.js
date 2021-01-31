import React from 'react';
import useStyles from './styles';

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton';

import moment from 'moment';
import { useDispatch } from 'react-redux';
    
const Post = ({ post }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>

        <div className={classes.cardHeader}>
            <Typography className={classes.eventName} variant="h5">
                {post.eventname}
            </Typography>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="add to favorites">
                    <EditIcon style={{ color: "white" }}/>
                </IconButton>
                <IconButton aria-label="share">
                    <DeleteIcon style={{ color: "white" }}/>
                </IconButton>
            </CardActions>
        </div>

            <div className={classes.cardContent}>
                <div className={classes.cardSection}>
                    <Typography className={classes.cardSubtitle} variant="body1">
                        Time
                    </Typography>
                    <div className={classes.sectionTextBlock}>
                        <Typography className={classes.sectionText} variant="body2">
                            {post.time}
                        </Typography>
                    </div>
                </div>


                <div className={classes.cardSection}>
                    <Typography className={classes.cardSubtitle} variant="body1">
                        Location
                    </Typography>
                    <div className={classes.sectionTextBlock}>
                        <Typography className={classes.sectionText} variant="body2">
                            {post.location}
                        </Typography>
                    </div>
                </div>


                <div className={classes.cardSection}>
                    <Typography className={classes.cardSubtitle} variant="body1">
                        People
                    </Typography>
                    <div className={classes.sectionTextBlock}>
                        <Typography className={classes.sectionText} variant="body2">
                            {post.people}
                        </Typography>
                    </div>
                </div>

                <div className={classes.cardSection}>
                    <Typography className={classes.cardSubtitle} variant="body1">
                        Info and Notes
                    </Typography>
                    <div className={classes.sectionTextBlock}>
                        <Typography className={classes.sectionText} variant="body2">
                            {post.info}
                        </Typography>
                    </div>
                </div>


            </div>

            {/* <CardMedia className={classes.media} eventname={post.eventname}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{post.creator}</Typography>
            </div> */}
        </Card>
    );
}

export default Post;