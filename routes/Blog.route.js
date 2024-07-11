let express = require("express");
const { blogcontroller } = require("../controller");
const { islogin } = require("../middleware/admin.auth");
const { upload } = require("../middleware/upload");
let router = express.Router();

router.post("/createblog", islogin, upload.single("blogimage"), blogcontroller.blogcreate);
router.get("/getblog", blogcontroller.blogget);
router.delete("/deleteblog/:id", blogcontroller.blogdelete)
router.put("/updatablog/:id", blogcontroller.blogupdata)

module.exports = router