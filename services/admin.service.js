const { adminSchema } = require("../models")

let postadmin = (body) => {
    return adminSchema.create(body)
}

let getadmin = () => {
    return adminSchema.find();
}

let deleteadmin = (id) => {
    return adminSchema.findByIdAndDelete(id);

}

let updataadmin = (id, body) => {
    return adminSchema.findByIdAndUpdate(id, body)
}

let findbyname = (adminname) => {
    return adminSchema.findOne({ adminname })
}
module.exports = { postadmin, getadmin, deleteadmin, updataadmin ,findbyname }