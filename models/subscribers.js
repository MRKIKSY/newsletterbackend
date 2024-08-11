

const mongoose = require('mongoose');

const SubscribersSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Subscribers', SubscribersSchema);
