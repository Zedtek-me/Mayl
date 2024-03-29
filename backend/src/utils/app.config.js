const {UserModel:User, EmailAccounts, EmailMessages} = require("../models")
const path = require("path")
const express = require("express")
const cors = require("cors")

const configureApp = (app) =>{
    app.use(express.json())
    app.use(cors({
        origin:"http://localhost:3002",
        optionsSuccessStatus:200
    }))
    app.set("views", path.resolve("frontend/public"))
    app.engine("html", require("ejs").renderFile)
}

const createUser = async ({username, password})=>{
    await User.create({
        data:{
            username:username,
            password:password
        }
    })
}

const users = async (id=null, username=null)=>{
    if(id)return
    else if(username)return null
    let users = await User.findMany({
        
    })
    return users
}

module.exports = {
    configureApp,
    createUser,
    users,
}
