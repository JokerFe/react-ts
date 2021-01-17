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