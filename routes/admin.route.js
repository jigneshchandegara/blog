let express = require("express");
const { admincontroller } = require("../controller");
let router = express.Router();

router.post("/createadmin", admincontroller.createadmin);
router.get("/getadmin", admincontroller.getlistadmin);
router.delete("/deleteadmin/:id" , admincontroller.deleteadminid);
router.put("/updateadmin/:id", admincontroller.updateadminid);

//login
router.post("/login", admincontroller.loginadmin);
module.exports = router