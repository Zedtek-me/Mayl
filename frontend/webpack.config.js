const path = require("path")

module.exports = {
    entry:path.resolve(__dirname, "src/roots/index.jsx"),
    output:{
        path:path.join(__dirname, "public"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            },

            {
                test:/\.(css|scss)/,
                use:["style-loader", "css-loader"],

            },
            {
                test:/\.(svg|png|jpg|ico)$/,
                type: "asset/resource"
            }
        ]
    },

    devServer:{
        static:{
            directory:"./public"
        },
        port:3002,
        historyApiFallback:true,
        hot:true
    }
}