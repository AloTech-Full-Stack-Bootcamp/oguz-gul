const postData = require('../models/postData');

exports.getAllPosts = async (req, res) => {
    const allposts = await postData.find({}).sort('-dateCreated');
    res.render('index', {
        allposts,
    });
};

exports.getPost = async (req, res) => {
    const allp = await postData.findById(req.params.id);
    res.render('post', {
        allp,
    });
};

exports.createPost = async (req, res) => {
    await postData.create(req.body);
    res.redirect('/');
};

exports.deletePost = async (req, res) => {
    await postData.findByIdAndRemove(req.params.id);
    res.redirect('/');
};

exports.editPost = async (req, res) => {
    const allp = await postData.findOne({ _id: req.params.id });
    allp.title = req.body.title;
    allp.detail = req.body.detail;
    allp.save();

    res.redirect(`/allposts/${req.params.id}`);
};
