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
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
    }
}, { timestamps: true })

module.exports = mongoose.model("Comment", CommentSchema)