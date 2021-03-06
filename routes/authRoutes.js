const passport = require('passport');

module.exports = app => {

    app.get("/auth/google", passport.authenticate("google", {
        scope: ["profile", "email"]
      }));

    app.get( "/auth/google/callback",
      passport.authenticate("google"),
      (req, res) => {
        res.redirect("/surveys");
      }
    );

    app.get("/auth/logout", (req, res) => {
      //logout function automatically attached to passport
      //takes the id cookie and removes it
      req.logout();
      res.redirect("/");
    });

    app.get("/auth/current_user", (req, res) => {
      res.send(req.user);
    });

}

