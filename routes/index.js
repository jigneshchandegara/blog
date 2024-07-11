let express = require("express");
let routes = express.Router();
let userRoute = require("./user.route");
let adminRoute = require("./admin.route");
let blogRoute = require("./Blog.route");


routes.use("/user", userRoute);
routes.use("/admin", adminRoute);
routes.use("/blog", blogRoute)

module.exports = routes;