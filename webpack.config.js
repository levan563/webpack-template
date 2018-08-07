const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './source/index.js',
    output: {
        filename: '[hash]app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(eot|ttf|otf|woff|woff2)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[name]-[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: -1,
                            name: '[path][name].[hash].[ext]'
                        }
                    },
                    {
                        loader: 'img-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    mode: 'development',
    resolve: {
        alias: {
            images: path.resolve(__dirname, './dist/assets/images')
        }
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './source/index.html',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([{
            from: './source/assets',
            to: './assets'
        }])
    ]
};