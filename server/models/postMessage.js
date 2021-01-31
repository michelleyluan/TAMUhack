import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    eventname: String,
    time: String,
    location: String,
    people: String,
    info: String,
});


const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;