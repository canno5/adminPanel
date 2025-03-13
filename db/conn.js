const mogoose = require("mongoose");
const URI  = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mogoose.connect(URI);
        console.log("Connection is Sucess");

    } catch (err) {
        console.log("Connection is Falied " + err);
    }
} 

module.exports = connectDB;



