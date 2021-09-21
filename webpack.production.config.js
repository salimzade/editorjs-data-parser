const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'editor.parser.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
