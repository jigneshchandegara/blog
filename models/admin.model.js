let mongoose = require("mongoose");

let adminSchema = new mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    adminpassword: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
)

let admin = mongoose.model("adminSchema", adminSchema);
module.exports = admin;