/*
 * @Author: haorongzheng
 * @Date: 2021-01-24 13:40:28
 * @LastEditTime: 2021-01-24 14:43:23
 * @LastEditors: haorongzheng
 * @Description: 
 * @FilePath: /react-ts/config/webpack.development.js
 * @保佑代码永无bug
 */
const {join} = require('path');

module.exports = {
    output: {
        publicPath: '/',
        assetModuleFilename: 'images/[name][ext]',
        filename: 'scripts/[name].bundle.js'
    },
    devServer: {
        hot: true,
        quiet: true,
        port: 8081,
        contentBase: join(__dirname,'../dist'),
        proxy: {

        }
    }
}