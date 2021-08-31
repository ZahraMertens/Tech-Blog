const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try{
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        if (!postData) {
            res.status(200).json({message: 'Create new post'});
            return
        }

        const posts = postData.map((post) => {
            return post.get({plain: true});
        })

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });

    } catch (error){
        console.log(error)
        res.status(500).json({name: error.name, message: error.message})
    }
});

// router.get
module.exports = router;
