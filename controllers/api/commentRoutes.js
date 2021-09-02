const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {

    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                },
                {
                    model: Comment,
                    attributes: ['comment_content', 'date_created', 'user_id'],
                    where: {
                        post_id: req.params.id,
                    },
                    include: {
                      model: User,
                      attributes: ['username', 'id'],
                    }
                },

            ]
        });

        //Needs to be fixed if comments dont exist go anyway 
    
        const post = postData.get({plain: true});
    
        res.render('comments', {
            ...post,
            logged_in: req.session.logged_in
        });

        
    } catch (error) {
        console.log(error)
        res.status(500).json({name: error.name, message: error.message});
    }
})

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment_content: req.body.comment_content,
        post_id: req.body.post_id,
        user_id: req.session.user_id
      });
  
      console.log("success")
      res.status(200).json(newComment);

    } catch (err) {

      res.status(400).json(err);

    }
});


module.exports = router;