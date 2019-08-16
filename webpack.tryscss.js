const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // устанавливается с npm
//const webpack = require('webpack');  получить доступ ко встроенным плагинам
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // добавил плагин, использую с sass



module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [{
				test: /\.pug$/,
				use: [{
					loader: "pug-loader",
					options: {
						pretty: true
					}
				}]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs"
					}
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.pug'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			// chunkFilename: '[id].css'
			// template: './src/style.scss'
		})
	]
};