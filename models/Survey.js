const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: {type: String, required: true},
    subject: {type: String, required: true},
    body: {type: String, required: true},
    yes: { type: Number, default: 0},
    no: { type: Number, default: 0},
    recipients: [ RecipientSchema ],
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    dateSent: { type: Date, defualt: Date.now() },
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);