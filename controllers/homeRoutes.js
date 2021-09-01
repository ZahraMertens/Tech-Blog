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

router.get('/post/:id', withAuth, async (req, res) => {

    try{
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        if (!postData) {
            res.status(200).json({message: 'Create new post'});
            return
        }

        const post = postData.get({plain: true});

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });

    } catch (error){
        console.log(error)
        res.status(500).json({name: error.name, message: error.message})
    }
})

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.get('/post', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('createPost');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});

module.exports = router;
