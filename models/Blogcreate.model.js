let mongoose = require("mongoose");

let BlogcreateSchema = new mongoose.Schema(
    {
        adminname: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "adminSchema"
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        blogimage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const blog = mongoose.model("BlogcreateSchema", BlogcreateSchema);
module.exports = blog;