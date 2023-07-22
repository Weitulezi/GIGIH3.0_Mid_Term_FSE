const Product = require("../models/productsModel")

const productListController =  async (req, res) => {
    const { title, price, link } = req.body

    const newProduct = new Product({
        title,
        price,
        link
    })

    try {
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    } catch(err) {
        console.log(err);
        res.status(400).json({message: "Failed to save product to the database."})
    }
}

module.exports = { productListController }