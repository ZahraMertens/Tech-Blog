const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });

    } catch (error) {
        res.status(404).json({message: "specific error to not show the user where the error is"})
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        console.log("post routes works")

        if (!userData){
            res.status(400).json({message: 'Incorrect email or password'});
            return;
        }
        
        const validPass = await userData.checkPassword(req.body.password);

        if (!validPass){
            res.status(400).json({message: 'Incorrect email or password'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({user: userData, message: 'Login Success!' })
        })

    } catch (error) {
        res.status(404).json({message: "specific error to not show the user where the error is"})
    }
});

router.post('/logout', async (req, res) => {
    
    if (req.session.logged_in) {
        req.session.destroy(() => {
          res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
    
module.exports = router;
