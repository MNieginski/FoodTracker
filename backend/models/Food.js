const mongoose = require("mongoose");
const Schema = mongoose.Schema



// Models

const FoodSchema = new Schema ({
    // apiId: {type: String, default: null},
    name: String,
    calories: Number,
    servingSize: Number,
    fatContent: Number,
    protein: Number,
}, {timestamps: true});

module.exports = mongoose.model("Food", FoodSchema);