module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'public/bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                // /\.jsx?$/ will find any file with .js or .jsx
                test: /\.jsx?$/,
                include: /app/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}