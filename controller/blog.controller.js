const uploadImage = require("../middleware/cloudinary");
const { blogservices } = require("../services");

let blogcreate = async (req, res) => {
    try {
        let body = req.body;
        let { path } = req.file;

        let result = await uploadImage(path);

        let newBody = {
            ...body,
            blogimage: result.url,
          };

        let blog = await blogservices.postblog(newBody);

        res.status(201).json({
            message: "Blog create successfully",
            data: newBody
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error in blog",
            error: error.message
        })
    }
}

let blogget = async (req, res) => {
    try {
        let blog = await blogservices.getblog();
        res.status(200).json({
            message: "Blog get successfully",
            data: blog
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error in blog",
            error: error.message
        })
    }
}

let blogdelete = async (req, res) => {
    try {
        let { id } = req.params;
        let blog = await blogservices.deleteblog(id);
        res.status(200).json({
            message: "Blog delete successfully",
            data: blog
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error in blog",
            error: error.message
        })
    }
}

let blogupdata = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let blog = await blogservices.updatablog(id, body);

        let newblog = {
            ...body,
            _id: id
        }
        res.status(200).json({
            message: "Blog update successfully",
            data: newblog
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error in blog",
            error: error.message
        })
    }
}
module.exports = { blogcreate, blogget, blogdelete, blogupdata };