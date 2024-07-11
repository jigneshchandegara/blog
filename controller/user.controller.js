const { userservices } = require("../services")


let usercreate = async (req, res) => {
    try {
        let body = req.body
        let user = await userservices.postuser(body);

        res.status(201).json({
            message: "user create successfully",
            data: user
        })

    } catch (error) {
        res.status(500).json({
            message: "user not create",
            error: error.message
        })
    }
}

let usergetlist = async (req, res) => {
    try {
        let user = await userservices.getuser();
        res.status(200).json({
            message: "user get successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "user not get",
            error: error.message
        })
    }
}

let userdelete = async (req, res) => {
    try {

        let { id } = req.params;
        let user = await userservices.deleteuser(id);
        res.status(200).json({
            message: "user delete successfully",
            data: user
        })

    } catch (error) {
        req.status(500).json({
            message: "user not delete",
            error: error.message
        })
    }
}

let userupdata = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let user = await userservices.updatauser(id, body);

        req.status(200).json({
            message: "user update successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "user not update",
            error: error.message
        })
    }
}

module.exports = { usercreate, usergetlist, userdelete, userupdata }