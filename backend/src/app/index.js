const express = require("express")
const {configureApp} = require("../utils/app.config")
require("dotenv").config()
const applicationPort = process.env.PORT || 7000

const app = express()
app.use(express.json())
configureApp(app)//set further configurations for app.
app.listen(applicationPort, ()=>console.log(`started listening on ${applicationPort}`))

// routes and logics
app.get("/", (req, res)=>{
    res.status(200).json({
        success:"Successful connection to the backend!"
    })
})


app.post("/createUser", (req, res)=>{
    let data = req.body
    console.log("data...", data)
    res.status(200).json(data)
})

app.post("/createEmail", (req, res)=>{
    /**allows a user to create an email account */
    res.send("")
})

