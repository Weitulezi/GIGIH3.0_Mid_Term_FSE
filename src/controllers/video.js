const Video = require("../models/video")

const createVideoController =  async (req, res) => {
    const { imageUrl } = req.body

    const newVideo = new Video({
        imageUrl
    })

    try {
        const saveVideo = await newVideo.save()
        res.status(200).json(saveVideo)
    } catch(err) {
        console.log(err);
        res.status(400).json({message: "Failed to save video to the database."})
    }
}

const getVideoListController =  async (req, res) => {
    try {
        const videos = await Video.find()
        res.status(200).json(videos)
    } catch(err) {
        console.log(err);
        res.status(400).json({message: "Failed to retrieve videos from the database."})
    }
}

module.exports = { getVideoListController, createVideoController }