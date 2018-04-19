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
      // if there is a proxy, handle it ie https vs http
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {

      const existingUser = await User.findOne({ googleId: profile.id })
        
      if (existingUser){
        // we already have a record with profile id
        //call done. first argument is an error arg
        //second arg is the found resource
        return done(null, existingUser);
      } else {
        // create a new user, don't have a current user
        // create new user async, then save, then return
        //user with done function arg

        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }      
    }
  )
);

