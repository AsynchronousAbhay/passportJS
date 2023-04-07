const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    phone: String,
    avatar: {
        type: String,
        default: "img.png"
    }
});

// userSchema.plugin(plm, { usernameField: "email" }); --- by deafult it sets to username, if   you it asks email while login instead of username the use this...

userSchema.plugin(plm);

const User = mongoose.model("User", userSchema);

module.exports = User;