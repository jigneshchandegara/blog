const { BlogcreateSchema } = require("../models")

let postblog = (body) => {
    return BlogcreateSchema.create(body)
}

let getblog = () => {
    return BlogcreateSchema.find().populate(["adminname"])
}

let deleteblog = (id) => {
    return BlogcreateSchema.findByIdAndDelete(id)
}

let updatablog = (id, body) => {
    return BlogcreateSchema.findByIdAndUpdate(id, body)
}
module.exports = { postblog, getblog, deleteblog, updatablog }