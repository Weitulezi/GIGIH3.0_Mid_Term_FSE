const express = require('express')
const router = express.Router()

const { 
    getVideoListController,
    createVideoController,
 } = require("../controllers/video")

router.get("/", getVideoListController)
router.post("/", createVideoController)

module.exports = router