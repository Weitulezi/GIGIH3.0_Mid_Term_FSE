const Product = require("../models/product")

const createProductController =  async (req, res) => {
    const { title, price, link, videoId } = req.body

    const newProduct = new Product({
        title,
        price,
        link,
        video: videoId
    })

    try {
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    } 
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Failed to create product."})
    }
}

const getProductListController =  async (req, res) => {
    const videoId = req.params.videoId

    try {
        const products = await Product.find({video: videoId})
        res.status(200).json(products)
    } 
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Failed to retrieve products."})
    }
}

module.exports = { createProductController, getProductListController }