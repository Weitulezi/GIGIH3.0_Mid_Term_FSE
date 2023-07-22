require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)
const database = mongoose.connection

database.on("error", (error) => {
    console.log(error);
})

database.once("connected", () => {
    console.log("Database connected!");
})

const app =  express()

const productsRoute = require("./routes/productsRoute")

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.listen(3000, () => {
    console.log(`Server started at port ${3000}`);
})

app.use("/api/products", productsRoute)


