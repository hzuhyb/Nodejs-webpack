var webpack = require('webpack');
var path = require('path');
var vue = require('vue-loader');

var config = {
    entry: {
        app: [
            'webpack/hot/dev-server', 
            'webpack-dev-server/client?http://localhost:8080',
            path.resolve(__dirname, 'src/main.js')
        ]
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass',
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000',
            exclude: /node_modules/,
        }, {
            test: /\.html$/,
            loader: 'raw',
            exclude: /node_modules/,
        }, {
            test: /\.vue$/, 
            loader: 'vue-loader',
            exclude: /node_modules/
            // loader: vue.withLoaders({
            //     js: 'babel?optional[]=runtime'
            // })
        }, {
            test: require.resolve("jquery"), 
            loader: "expose?$?jQuery"
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            ON_DEMO: process.env.NODE_ENV === 'demo'
        })
    ]
}

module.exports = config;
