const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        // 这个参数会影响到 webpack-dev-server 的行为，
        // 如果设置为 true，webpack-dev-server 会启用内联模式;代理不会生效
        historyApiFallback: false,
        hot:true,
        open:true,
        allowedHosts: 'all',
        proxy: {
            '/api': {
                target: 'http://localhost:9001', // 目标服务器
                changeOrigin: true, // 修改请求头中的 `origin`，伪装成同源请求
                pathRewrite: { '^/api': '' }, // 去掉 `/api`，确保正确匹配后端路径
                secure: false, // 如果后端是 HTTPS，但使用了自签名证书，需设为 `false`
                logLevel: 'debug' // 输出代理调试信息，方便排查问题
            },
        }
    },
    devtool : 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Development Haho')
        }),
        new ReactRefreshWebpackPlugin()
    ]
}