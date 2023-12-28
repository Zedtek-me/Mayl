const nodemailer = require("nodemailer")

// creates a default transport object
let transport = nodemailer.createTransport(
    {

    }
)


const sendMail = (mailBody)=>{
    //a mail sending util
}

module.exports = {
    sendMail,
    transport
}