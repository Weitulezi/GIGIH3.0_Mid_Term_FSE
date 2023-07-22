const express = require('express')
const router = express.Router()

const { 
    getProductsListController,
    createProductController,
 } = require("../controllers/productsController")

router.get("/", getProductsListController)
router.post("/", createProductController)


module.exports = router