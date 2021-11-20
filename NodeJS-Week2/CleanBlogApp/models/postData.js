//Import mogoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const BlogSchema = new Schema({
    name: String,
    message: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const postData = mongoose.model('postData', BlogSchema);

module.exports = postData;
