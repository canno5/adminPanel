const mogoose = require("mongoose");
// const URI = "mongodb+srv://ciuniliusmasih:canan6451$$@cluster0.4l1x3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const URI  = "mongodb://localhost:27017/adminPanelData"
// const URI  = "mongodb://127.0.0.1:27017/adminPanelData"
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



