import React from 'react';
import useStyles from './styles';

import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton';

import { deletePost } from '../../../actions/posts';

import moment from 'moment';
import { useDispatch } from 'react-redux';
    
const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();    
    const classes = useStyles();

    return (
        <Card className={classes.card}  elevation={0}>

        <div className={classes.cardHeader}>
            <Typography className={classes.eventName} variant="h5">
                {post.eventname ? `${post.eventname}` : 'NA'}
            </Typography>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton className={classes.iconButton} aria-label="Edit event" onClick={() => setCurrentId(post._id)}>
                    <EditIcon style={{ color: "white" }} fontSize="small" />
                </IconButton>
                <IconButton className={classes.iconButton} aria-label="Delete event" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon style={{ color: "white" }} fontSize="small" />
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
                            {post.time ? `${post.time}` : 'NA'}
                        </Typography>
                    </div>
                </div>


                <div className={classes.cardSection}>
                    <Typography className={classes.cardSubtitle} variant="body1">
                        Location
                    </Typography>
                    <div className={classes.sectionTextBlock}>
                        <Typography className={classes.sectionText} variant="body2">
                            {post.location ? `${post.location}` : 'NA'}
                        </Typography>
                    </div>
                </div>


                <div className={classes.cardSection}>
                    <Typography className={classes.cardSubtitle} variant="body1">
                        People
                    </Typography>
                    <div className={classes.sectionTextBlock}>
                        <Typography className={classes.sectionText} variant="body2">
                            {post.people ? `${post.people}` : 'NA'}
                        </Typography>
                    </div>
                </div>

                <div className={classes.cardSection}>
                    <Typography className={classes.cardSubtitle} variant="body1">
                        Info and Notes
                    </Typography>
                    <div className={classes.sectionTextBlock}>
                        <Typography className={classes.sectionText} variant="body2">
                            {post.info ? `${post.info}` : 'NA'}
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