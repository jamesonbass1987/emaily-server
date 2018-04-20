const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const passport = require('passport');
const keys = require('./config/keys');

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require("./routes/billingRoutes");

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        // maxAge set for 30 days
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/api/billing", billingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);