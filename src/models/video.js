const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
    imageUrl: {
        required: true,
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("Video", VideoSchema)
