import { createTransport } from "nodemailer";
import { config } from "dotenv";
config()

const EMAIL_HOST = process.env.EMAIL_HOST
const EMAIL_PORT = process.env.EMAIL_PORT
const EMAIL_USER = process.env.EMAIL_USER

export const sendMail = ({body, sender, receiver})=>{
    /**mail sender util */
}