const express = require('express')
const router = express.Router()

const { 
    productListController
 } = require("../controllers/productsController")

router.get("/", productListController)

module.exports = router