let mongoose = require("mongoose");

let DBconnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("DB Connected successfully ");
    }).catch((error) => {
        console.log("error is :", error)
    })
}

module.exports = DBconnect;