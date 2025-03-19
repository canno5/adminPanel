const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // }
});
// AdminSchema.pre("save", async function () {
//     const user = this;
//     try {
//         if (user.isModified("password")) {
//             const saltRound = await bcrypt.genSalt(6);
//             // console.log(user.password);
//             const hash_password = await bcrypt.hash(user.password, saltRound);
//             // console.log(hash_password);
//             user.password = hash_password
//         };
//     } catch (error) {
//         console.log(error);
//     }
// });
// AdminSchema.methods = generateToken = async function () {
AdminSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        // }, 'Mynameiscannomernstackdevelopmentgeniusintelligent', {
        }, process.env.SECRET_KEY, {
            expiresIn: "30d"
        })
    } catch (error) {
        console.log(error);
    }
}
const ADMIN = model("ADMINS", AdminSchema);
module.exports = ADMIN;