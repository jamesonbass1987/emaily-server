const   passport    = require('passport'),
        express     = require('express'),
        router      = express.Router();


router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
    })
);

router.get(
    '/google/callback', 
    passport.authenticate('google'), 
    (req, res) => {
        res.redirect('/surveys');    
    }
);

router.get('/logout', (req, res) => {
    //logout function automatically attached to passport
    //takes the id cookie and removes it
    req.logout();
    res.redirect('/');
});

router.get('/current_user', (req, res) => {
    console.log('fetching current user of ', req.user)
    res.send(req.user);
});

module.exports = router;