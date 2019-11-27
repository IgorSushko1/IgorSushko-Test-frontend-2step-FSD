const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
    poll: 1000,
		// ignored: [node_modules, dist],
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
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},

			{
				test: /\.(svg|png|jpg|gif)$/,
				use: [{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "imgs/",
						publicPath: "imgs/"
					}
				}]
			},
		],

	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	plugins: [
		new HtmlWebpackPlugin({
			// title: "Ui-kit",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "index.html",
			template: './src/index.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "landing-one.html",
			template: './src/UI-kit/library/pages/landing-page.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "registration.html",
			template: './src/UI-kit/library/pages/registration.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "registration-sign-up.html",
			template: './src/UI-kit/library/pages/registration-sign-up.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "registration-sign-in.html",
			template: './src/UI-kit/library/pages/registration-sign-in.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "base-page.html",
			template: './src/UI-kit/library/pages/base-page.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "search-page.html",
			template: './src/UI-kit/library/pages/search-page.pug'
		}),
		new HtmlWebpackPlugin({
			filename: "room.html",
			template: './src/UI-kit/library/pages/room-detail-page.pug'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new CopyWebpackPlugin([{
			from: "./src/UI-kit/pic/",
			to: "./imgs"
		}])
	]
};