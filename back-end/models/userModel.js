const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please tell us your first name."],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Please tell us your last name."],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "Email is already linked to an account!"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
        trim: true
    },
    // TODO: parse phone number to make it only consist of digits, change type to number
    phoneNumber: String,
    textNotifs: Boolean,
    emailNotifs: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;