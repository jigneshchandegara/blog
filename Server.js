require("dotenv").config()
let http = require("http");
let express = require('express');
let app = express();
let DBconnect = require("./DB/dbconnection");
let routes = require("./routes");
let cors = require("cors");
const cookieParser = require("cookie-parser");

//cors
app.use(
    cors({
      origin: "*",
    })
  );

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false  }));


//for cookie
app.use(cookieParser());

//routes
app.use("/v1", routes)

//Dbconnect
DBconnect();

//server start
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
