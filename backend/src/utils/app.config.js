const {UserModel:User, EmailAccounts, EmailMessages} = require("../models")

const configureApp = (app) =>{
    app.set("views", "../templates")
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
    else if(username)return
    let users = await User.findMany({})
    return users
}

module.exports = {
    configureApp,
    createUser,
    users,
}
