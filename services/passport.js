const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  //done is a callback to call after work is done
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {

      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser){
            // we already have a record with profile id
            //call done. first argument is an error arg
            //second arg is the found resource
            done(null, existingUser);
          } else {
            // create a new user, don't have a current user
            // create new user async, then save, then return
            //user with done function arg

            new User({ googleId: profile.id })
              .save()
              .then(user => {
                //call done. first argument is an error arg
                //second arg is the found resource
                done(null, user);
              });
          }
        });      
    }
  )
);

