const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

    const userId = req.session.user_id;
    console.log(userId)

    try {

        const userData = await User.findOne({
            where: {
                id: userId,
            }
        });

        const user = userData.get({plain: true});
        console.log(user)

        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                },
            ],
            attributes: ['id', 'title', 'post_content', 'date_created'],
            where: {
                user_id: userId,
            }
        });

        if (!postData) {
            res.status(200).json({message: 'errorororor'});
            return
        }

        const posts = postData.map((post) => {
            return post.get({plain: true})
        });

        console.log(posts)

        res.render('dashboard', {
            posts,
            user,
            logged_in: req.session.logged_in
        });

    } catch (error) {

        res.status(500).json({name: error.name, message: error.message})
    }
})

module.exports = router