const Product = require("../models/product")

const createProductController =  async (req, res) => {
    const { title, price, link, videoId } = req.body

    const newProduct = new Product({
        title,
        price,
        link,
        videoId
    })

    try {
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    } 
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Failed to save product to the database."})
    }
}

const getProductListController =  async (req, res) => {
    const videoId = req.params.videoId

    try {
        const products = await Product.find({videoId: videoId})
        res.status(200).json(products)
    } 
    catch (err) {
        console.log(err);
        res.status(400).json({message: "Failed to retrieve products to the database."})
    }
}

module.exports = { createProductController, getProductListController }