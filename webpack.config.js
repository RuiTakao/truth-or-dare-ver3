const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/ts/app.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    devServer: {
        static: [
          {
            directory: path.resolve(__dirname, "dist"),
            publicPath: "/dist",
          },
          {
            directory: __dirname,
            publicPath: "/",
          },
        ],
      },
      devtool: "eval",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|sass|css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ]
};