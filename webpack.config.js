const path = require('path');

module.exports = {
    entry: {
        newfile: [
            './src/core/app.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map'
};