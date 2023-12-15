const express = require("express")
const {UserModel, EmailAccounts, EmailMessages} = require("../models")
const {configureApp} = require("../utils/app.config")
require("dotenv").config()
const applicationPort = process.env.PORT || 7000

const app = express()
app.use(express.json())
configureApp(app)//set further configurations for app.
app.listen(applicationPort, ()=>console.log(`started listening on ${applicationPort}`))

// routes and logics
app.get("/", (req, res)=>{
    console.log(UserModel)
    res.status(200).json({
        success:"Successful connection to the backend!"
    })
})