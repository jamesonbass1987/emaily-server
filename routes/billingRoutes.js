const   keys        = require('../config/keys'),
        stripe      = require("stripe")(keys.stripeSecretKey),
        requireLogin  = require('../middlewares/requireLogin');


module.exports = app => {

    app.post("/api/billing/stripe", requireLogin, async (req, res) => {

        const charge = await stripe.charges.create({
            amount: 5000,
            currency: "usd",
            source: req.body.id,
            description: "Charge for emaily.com credits."
        });

        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });

}

