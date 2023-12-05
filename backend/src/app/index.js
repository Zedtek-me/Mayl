const express = require("express")
const {UserModel} = require("../models")
require("dotenv").config()
const applicationPort = process.env.PORT || 7000
const app = express()
app.use(express.json())

app.listen(applicationPort, ()=>`started listening on ${applicationPort}`)

app.get("/", (req, res)=>{
    res.status(200).json({
        success:"Successful connection to the backend!"
    })
})