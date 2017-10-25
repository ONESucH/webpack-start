const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {loader: 'less-loader', options: {strictMath: true, noIeCompat: true}}]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    watch: true
};