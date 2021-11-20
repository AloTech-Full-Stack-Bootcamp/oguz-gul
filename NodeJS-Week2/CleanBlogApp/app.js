// Import modules
const express = require('express');
const postData = require('./models/postData');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

const app = express();

//Connect Db
mongoose
    .connect(
        'mongodb+srv://admin:admin@cluster0.rysg6.mongodb.net/clean-blog-db?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log('db connection successful');
    })
    .catch((err) => {
        console.log(err);
    });

// Template Engine
app.set('view engine', 'ejs');

//Static file configuration - (Middleware)
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    methodOverride('_method', {
        methods: ['POST', 'GET'],
    })
);

// on the request to root page - ROUTES
app.get('/', postController.getAllPosts);
app.get('/allposts/:id', postController.getPost);

// on the request to about page - ROUTES
app.get('/about', pageController.getAboutPage);

// on the request to post page - ROUTES
app.get('/add_post', pageController.getAddpostPage);

// on the request to edit page - ROUTES
app.get('/allposts/edit/:id', pageController.getEditPage);

// post response to post page
app.post('/add_post', postController.createPost);

// delete response to post page
app.delete('/allposts/:id', postController.deletePost);

// update response to post page
app.put('/allposts/:id', postController.editPost);

// Port listening and configuration
const port = 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`Server is starting ${port} on the port`);
});
