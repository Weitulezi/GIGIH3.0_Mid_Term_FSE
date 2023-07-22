const Video = require("../models/video")

const createVideoController =  async (req, res) => {
    const { imageUrl } = req.body

    const newVideo = new Video({
        imageUrl
    })

    try {
        const saveVideo = await newVideo.save()
        res.status(200).json(saveVideo)
    } 
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Failed to create video."})
    }
}

const getVideoListController =  async (req, res) => {
    try {
        const videos = await Video.find()
        res.status(200).json(videos)
    } 
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Failed to retrieve videos."})
    }
}

const getVideoController =  async (req, res) => {
    const videoId = req.params.videoId

    try {
        const videos = await Video.findById(videoId)
        res.status(200).json(videos)
    } 
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Failed to retrieve videos."})
    }
}

module.exports = { getVideoListController, createVideoController, getVideoController }