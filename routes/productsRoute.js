const express = require('express')
const router = express.Router()

const { 
    createProductController
 } = require("../controllers/productsController")

// router.get("/", getProductListController)
router.post("/", createProductController)


module.exports = router