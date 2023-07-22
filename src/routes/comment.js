const express = require('express')
const router = express.Router()

const { 
    getVideoCommentListController,
    createCommentController,
 } = require("../controllers/comment")

router.get("/:videoId", getVideoCommentListController)
router.post("/", createCommentController)

module.exports = router