var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    role: String,
    telNumber: Number,
    validUser: Boolean,
    admin: Boolean
});

module.exports = mongoose.model('User', UserSchema);

// Rmb to use \"xxxx\" style input when entering json