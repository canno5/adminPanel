const { Schema, model } = require("mongoose");

const CatagorySchema = new Schema({
    // no: { type: Number, default: 1 },
    no: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    update: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});
// CatagorySchema.methods.increment = (this) => {
//     console.log(this);
// }

const Catagorys = model("CATAGORYS", CatagorySchema);
module.exports = Catagorys;