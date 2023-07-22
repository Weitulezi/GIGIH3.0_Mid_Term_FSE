const Comment = require("../models/comment")

const getVideoCommentListController = async (req, res) => {
    const videoId = req.params.videoId
    
    try {
        const comments = await Comment.find({ video_id: videoId })
        res.status(200).json(comments)
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "Failed tor retrieve comments" })
    }
}

const createCommentController = async (req, res) => {
    const { username, content, videoId } = req.body

    const comment = new Comment({
        username,
        content,
        video_id: videoId
    })

    try {
        const saveComment = await comment.save()
        res.status(200).json({ success: true, message: "Comment is successfully created." })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: "Failed to create the comment." })
    }
}

module.exports = { getVideoCommentListController, createCommentController }