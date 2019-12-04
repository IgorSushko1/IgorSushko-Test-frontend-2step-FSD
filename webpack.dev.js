const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const globImporter = require('node-sass-glob-importer');

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
						pretty: true,
						"exports": false
					}
				}]
			},
			{
				test: /(\.css|\.scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							importer: globImporter()
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
				// loader: 'url'
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: "fonts/"
				}
			},

			// {
			// 	test: /\.(svg|png|jpg|gif)$/,
			// 	use: [{
			// 		loader: "file-loader",
			// 		options: {
			// 			name: "[name].[ext]",
			// 			outputPath: "imgs/",
			// 			publicPath: "imgs/"
			// 		}
			// 	}]
			// },
		],

	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "ui-kit.html",
			template: './src/ui-kit.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "landing-one.html",
			template: './src/pages/landing-page.pug'
		}),
		// new HtmlWebpackPlugin({
		// 	filename: "registration.html",
		// 	template: './src/pages/registration.pug'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: "registration-sign-up.html",
		// 	template: './src/pages/registration-sign-up.pug'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: "registration-sign-in.html",
		// 	template: './src/pages/registration-sign-in.pug'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: "base-page.html",
		// 	template: './src/pages/base-page.pug'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: "search-page.html",
		// 	template: './src/pages/search-page.pug'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: "room.html",
		// 	template: './src/pages/room-detail-page.pug'
		// }),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			options: {
				hmr: process.env.NODE_ENV === 'development'
			}
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new CopyWebpackPlugin([{
			from: "./src/assets/images/",
			to: "./imgs"
		}])
	]
};