const nodemailer = require("nodemailer")
const {config} = require("dotenv")

config({path:"../../.env"})
// creates a default transport object
let transport = nodemailer.createTransport(
    {
        host:"localhost",
        port:"587",
        secure:true,
        auth:{
            user:"zechariah",
            pass:"password"
        }
    }
)


const sendMailUtil = async (mailBody)=>{
    //a mail sending util
    let {from, to, subject, body} = mailBody
    await transport.sendMail({
        from:from,
        to:to,
        subject:subject,
        text:body,
        html:`<div class='mail template'>
                ${body}
                </div>
            `
    })
}

module.exports = {
    sendMailUtil,
    transport
}