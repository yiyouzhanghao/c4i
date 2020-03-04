const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpack = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports={
    mode:"development",
    entry:{
        index:"./src/main.js"
    },
    output:{
        path:__dirname+"/dist",
        filename: "index.js"
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
          ],
      },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        })
    ],
    devtool: 'inline-source-map',
    devServer:{
        contentBase: "./dist",
        index:"index.html",
        open:true,
    }
}