const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//create new instance of passport google strategy
passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: ""
    },
    function(accessToken, refreshToken, profile, cb){
        User.findOrCreate({ googleId: profile.id}, function (err, user) {
            return cb(err, user);
        })
    }
));


const PORT = process.env.PORT || 5000;
app.listen(PORT);