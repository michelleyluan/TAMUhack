// import React from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from '../Form/Form';

import { getPosts } from '../../actions/posts';

import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
    
const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log(posts);

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);


    return (
      <div className={classes.mainContainer}>
        <div className={classes.formContainer}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>

          {posts.map((post) => (
            <div className={classes.postContainer}>
              <Post post={post} setCurrentId={setCurrentId}/>
            </div>
          ))}
      </div>
    );
}

export default Posts;