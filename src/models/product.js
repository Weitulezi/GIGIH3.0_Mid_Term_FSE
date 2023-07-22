const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    link: {
        required: true,
        type: String
    },
    video_id: {
        type: mongoose.ObjectId
    }
}, { timestamps: true })



module.exports = mongoose.model("Product", ProductSchema)