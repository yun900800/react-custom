const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

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
                use: ["style-loader", "css-loader"],
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
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'react custom app',
            filename: 'index.html',
            template: './public/index.html'
        })
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