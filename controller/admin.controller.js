const { createtoken } = require("../middleware/admin.auth");
const { adminservices } = require("../services")


let createadmin = async (req, res) => {
    try {
        let body = req.body
        let result = await adminservices.postadmin(body);

        res.status(201).json({
            message: "admin create successfully",
            Data: result
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}

let getlistadmin = async (req, res) => {
    try {
        let result = await adminservices.getadmin();

        res.status(200).json({
            message: "admin list successfully",
            Data: result
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}

let deleteadminid = async (req, res) => {
    try {
        let { id } = req.params
        console.log(id);

        let result = await adminservices.deleteadmin(id);
        res.status(200).json({
            message: "admin delete successfully",
            Data: result
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong in admin delete",
            error: error.message
        })
    }
}

let updateadminid = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let result = await adminservices.updataadmin(id, body);

        let newbody = {
            ...body,
            _id: id
        }
        res.status(200).json({
            message: "admin update successfully",
            Data: newbody
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong in admin update",
            error: error.message
        })
    }
}

let loginadmin = async (req, res) => {
    try {
        let { adminname, adminpassword } = req.body;
        let result = await adminservices.findbyname(adminname);

        if (!adminname) {
            throw new Error("Admin not found")
        }
        if (result.adminpassword !== adminpassword) {
            throw new Error("password invalid");
        }

        let token = createtoken(result);
        res.cookie("token", token);
        res.status(200).json({ message: "login success" });
    } catch (error) {
        res.status(500).json({
            message: "something went wrong in admin login",
            error: error.message
        })

    }
}
module.exports = { createadmin, getlistadmin, deleteadminid, updateadminid, loginadmin }