const {join} = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { ESBuildPlugin, ESBuildMinifyPlugin } = require('esbuild-loader');


module.exports = {
    output: {
        path: join(__dirname, '../dist/assets'),
        publicPath: '/assets/',
        assetModuleFilename: 'scripts/[name].[contenthash:5].bundule.[ext]',
        filename: 'scripts/[name].[contenthash:5].bundule.js',
    },
    optimization: {
        minimize: true,
        minimizer: [
            // new TerserPlugin({
            //     parallel: true
            // })
            new ESBuildMinifyPlugin()
        ]
    },
    plugins: [
        new ESBuildPlugin()
    ]
}