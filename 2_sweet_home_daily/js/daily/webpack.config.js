const path = require('path');

module.exports = {
    entry: './src/type/html-generator.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MyModule',
        libraryTarget: 'var'
    }
}