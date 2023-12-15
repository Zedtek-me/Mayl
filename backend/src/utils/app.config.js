const configureApp = (app) =>{
    app.set("views", "../templates")
    app.engine("html", require("ejs").renderFile)
}

module.exports = {
    configureApp
}