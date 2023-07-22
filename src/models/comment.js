const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    video_id : {
        type: mongoose.ObjectId
    }
}, { timestamps: true })

module.exports = mongoose.model("Comment", CommentSchema)