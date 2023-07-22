const express = require('express')
const router = express.Router()

const { 
    getVideoListController,
    createVideoController,
    getVideoController,
 } = require("../controllers/video")

router.get("/:videoId", getVideoController)
router.get("/", getVideoListController)
router.post("/", createVideoController)

module.exports = router