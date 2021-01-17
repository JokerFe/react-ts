const merge = require('webpack-merge');
const { join, resolve } = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = _mode == 'production' ? true : false;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackBaseConfig = {
    entry: {
        app: resolve('src/web/index.tsx'),
    },
    entry: ['react-hot-loader/patch','./src/web/index.tsx'],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [resolve('src')],
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
                type: 'asset',
            },
        ],
    },
    plugins: [
        // new ProgressBarPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          // appMountId: 'app',
          filename: 'index.html', // 默认为index.html
          template: resolve(__dirname, './src/web/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: _modeflag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
            chunkFilename: _modeflag ? 'styles/[id].[contenthash:5].css' : 'styles/[id].css',
            // allChunks: true,
            ignoreOrder: true,
        }),
    ],
    resolve: {
        alias: {
            '@assets': resolve('src/web/assets'),
            '@components': resolve('src/web/components'),
            '@models': resolve('src/web/models'),
            '@routes': resolve('src/web/routes'),
            '@pages': resolve('src/web/pages'),
            '@utils': resolve('src/web/utils'),
            '@tools': resolve('src/web/tools'),
        },
        modules: ['node_modules', resolve('src')],
        extensions: ['.js', '.ts', '.tsx', 'jsx'],
    },
    experiments: {
        asset: true,
    },
};

module.exports = merge.default(webpackBaseConfig, _mergeConfig);