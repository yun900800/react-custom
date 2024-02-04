const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { HotModuleReplacementPlugin } = require('webpack')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.(ts|tsx)$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    // { loader: 'style-loader'},
                    {
                      loader: MiniCssExtractPlugin.loader,
                    },
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1
                      }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                    
                ],
            },
            {
                test: /.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline'
            },
            {
                test: /\.(?:ico|gif|jpeg|jpg|png)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'react custom app',
            filename: 'index.html',
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css'
        }),
        new HotModuleReplacementPlugin(),
        // ,
        // new CopyPlugin({
        //     patterns: [{ from: 'src' , to: 'dist'}]
        // })
    ]
    ,
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],    
    },
}