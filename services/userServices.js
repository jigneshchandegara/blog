const { userSchema } = require("../models")


let postuser = (body) => {
    return userSchema.create(body)
}

let getuser = () => {
    return userSchema.find()
}

let deleteuser = (id) => {
    return userSchema.findByIdAndDelete(id)
}

let updatauser = (id, body) => {
    return userSchema.findByIdAndUpdate(id, body);
}

module.exports = { postuser, getuser, deleteuser , updatauser }