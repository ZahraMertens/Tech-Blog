const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create', withAuth, async (req, res) => {
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