const mogoose = require("mongoose");
const URI  = process.env.MONGODB_URI



// mogoose.connect(URI).then(()=>{
//     console.log("Connection is Sucess")
// }).catch((err)=>{
//     console.log("Connection is Falied "+ err);
// });
const connectDB = async () => {
    try {
        await mogoose.connect(URI);
        console.log("Connection is Sucess");

    } catch (err) {
        console.log("Connection is Falied " + err);
        // process.exit(0);
    }
} 

module.exports = connectDB;



