var webpack = require('webpack');

module.exports = {
    entry: {
      app: './scripts/app.js',
      vendor: []
    },
    output: {
        path: './build',
        //publicPath: '/',//TODO for CDN path
        filename: '[name].js',
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
    },
    plugins: [
       new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor",
        /* filename= */"vendor.js")
    ]
};
