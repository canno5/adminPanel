const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({path: '.env'});

const adminRoute = require("../router/router");
const connectDB = require('../db/conn');
const cors = require("cors");
const errMiddleware = require("../middleware/err-middleware");

const port = process.env.PORT;

// NODE_ENV
if(process.env.PORT == "production"){
    app.use(express.static("cliend/dist"))
}
app.use(cors());
app.use(adminRoute);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/admin/api/data", adminRoute);
app.use(errMiddleware);

connectDB().then(() => {
    app.listen(port, () => {
        console.log("I am a Live to port no " + port)

    });
});
