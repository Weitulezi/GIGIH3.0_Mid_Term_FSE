const mongoose = require("mongoose")

const VideoSchema = new mongoose.Schema({
    imageUrl: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model("Video", VideoSchema)
