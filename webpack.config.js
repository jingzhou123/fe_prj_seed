var webpack = require('webpack');

module.exports = {
    entry: {main: './scripts/app.js'},
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].bundle.js'
        //sourceMapFilename: '[name].[hash].map.js',
        //libraryTarget: 'umd'//convert amd, commonjs, ..., to umd
    },
    devtool: 'inline-source-map',//for debugging
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},//es6 feature enable 
            {test: /\.css$/, loader: 'style-loader!css-loader?sourceMap!' },
            //https://github.com/3sv/webpack-less-autoprefixer-sourcemaps-demo
            //example: require('main.less').use()
            {test: /\.less$/,
             loader: 'style/useable!css?sourceMap!less-loader?sourceMap=true'}
        ]
    }
};
