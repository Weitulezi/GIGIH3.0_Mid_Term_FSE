const express = require('express')
const router = express.Router()

const { 
    getProductListController,
    createProductController,
 } = require("../controllers/product")

router.get("/:videoId", getProductListController)
router.post("/", createProductController)

module.exports = router