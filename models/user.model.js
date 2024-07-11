let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true,
    }
)

const user = mongoose.model("userSchema", userSchema);
module.exports = user;