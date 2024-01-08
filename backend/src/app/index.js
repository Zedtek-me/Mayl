const express = require("express")
const {configureApp} = require("../utils/app.config")
const {sendMailUtil} = require("../utils/mailingUtils")
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
    res.status(200).json(data)
})

app.post("/sendMail", async (req, res)=>{
    /**uses nodemailer to send email to the smtp server -- haraka*/
    let {from, to, body} = req.body
    let mailResult = await sendMailUtil({from, to, body})
    if(mailResult.messageId){
        res.status(200).json("mail sent successfully")
    }
    res.status(403).json({
        "error":`failed to send mail to ${to}`
    })
})

