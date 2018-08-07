const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractToCSS = require('extract-text-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');

const ProductionStyleLoader = new ExtractToCSS('[hash]-[name].css');
const StyleController = ProductionStyleLoader.extract({
    fallback: 'style-loader',
    use:['css-loader', 'sass-loader']
});
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
                use: StyleController
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
    mode: 'production',
    resolve: {
        alias: {
            images: path.resolve(__dirname, './dist/assets/images')
        }
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        ProductionStyleLoader,
        new CleanWebpackPlugin(['dist']),
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