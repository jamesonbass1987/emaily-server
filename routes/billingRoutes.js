const   express     = require("express"),
        router      = express.Router(),
        passport    = require("passport"),
        keys        = require('../config/keys'),
        stripe      = require("stripe")(keys.stripeSecretKey);

router.post('/stripe', (req, res) => {

    console.log(req.body);
    // stripe.charges.create({
    //     amount: 5000,
    //     currency: "usd",
    //     source: "",
    //     description: "Charge for emaily.com credits."
    // })

})

module.exports = router;