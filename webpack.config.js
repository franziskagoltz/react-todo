module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/templates',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './templates',
    }
};