const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// dotenv.config({path: '.env'});
dotenv.config();

const adminRoute = require("./router/router");
const connectDB = require('./db/conn');
const cors = require("cors");
const errMiddleware = require("./middleware/err-middleware");

const port = process.env.PORT;

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
// app.get("/canno", (req,res)=>{
//     res.send("Hello Canno")
//     req.params
//     req.query
// })

// const token =  jwt.sign("tokens", "cannaskaskkaskaskaskakskask");
// console.log(token)


