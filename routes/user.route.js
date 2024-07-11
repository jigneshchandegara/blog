let express = require("express");
const { usercontroller } = require("../controller");
let router = express.Router();

router.post("/createuser", usercontroller.usercreate);
router.get("/getuserlist", usercontroller.usergetlist);
router.delete("/deleteuser/:id", usercontroller.userdelete);
router.put("/updatauser/:id",usercontroller.userupdata)


module.exports = router