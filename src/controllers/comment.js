const Comment = require("../models/comment")

const getVideoCommentListController = async (req, res) => {
    const videoId = req.params.videoId
    
    try {
        const comments = await Comment.find({ videoId: videoId })
        res.status(200).json(comments)
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: "failed tor retrieve comments" })
    }
}

const createCommentController = async (req, res) => {
    const { username, content, videoId } = req.body

    const comment = new Comment({
        username,
        content,
        videoId
    })

    try {
        const saveComment = await comment.save()
        res.status(200).json({ success: true })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ success: false })
    }
}

module.exports = { getVideoCommentListController, createCommentController }