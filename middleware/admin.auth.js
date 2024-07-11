let jwt = require("jsonwebtoken");

let createtoken = (data) => {
    return jwt.sign({ data }, process.env.JWT_SECRET_KEY);
}

let islogin = (req, res, next) => {
    try {
        let token = req.cookies["token"];
        if (!token) {
            throw new Error("you are not login");
        }
        let data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = data
        next()
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}
module.exports = { createtoken, islogin }