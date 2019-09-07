const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // устанавливается с npm
//const webpack = require('webpack');  получить доступ ко встроенным плагинам
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // добавил плагин, использую с sass
const CopyWebpackPlugin = require('copy-webpack-plugin');




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
			// {
			// 	test: /\.m?js$/,
			// 	exclude: /(node_modules|bower_components)/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		// options: {
			// 		// 	presets: ['@babel/preset-env'],
			// 		// 	plugins: ['@babel/plugin-proposal-object-rest-spread']
			// 		// }
			// 	}
			// },
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					// {
          //   loader: 'postcss-loader',
          //   options: {
          //     sourceMap: true,
          //     config: {
          //       path: 'postcss.config.js'
          //     }
          //   }
          // },
					'sass-loader'
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				// ?name=/src/UI-kit/library/fonts/[name].[ext]',
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
					outputPath: "imgs",
					// publicPath: "imgs"
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
			// title: "1st landing page",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "landing-one.html",
			template: './src/UI-kit/library/pages/landing-page.pug'
		}),
		new HtmlWebpackPlugin({
			// title: "1st landing page",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "registration.html",
			template: './src/UI-kit/library/pages/registration.pug'
		}),
		new HtmlWebpackPlugin({
			// title: "1st landing page",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "registration-sign-up.html",
			template: './src/UI-kit/library/pages/registration-sign-up.pug'
		}),
		new HtmlWebpackPlugin({
			// title: "1st landing page",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "registration-sign-in.html",
			template: './src/UI-kit/library/pages/registration-sign-in.pug'
		}),
		new HtmlWebpackPlugin({
			// title: "1st landing page",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "base-page.html",
			template: './src/UI-kit/library/pages/base-page.pug'
		}),
		new HtmlWebpackPlugin({
			// title: "1st landing page",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "search-page.html",
			template: './src/UI-kit/library/pages/search-page.pug'
		}),
		new HtmlWebpackPlugin({
			// title: "1st landing page",
			// hash: true,
			// alwaysWriteToDisk: true,
			filename: "room.html",
			template: './src/UI-kit/library/pages/room-detail-page.pug'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			// chunkFilename: '[id].css'
			// template: './src/style.scss'
		}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
			'window.jQuery': 'jquery',
			// foo: './src/UI-kit/library/blocks/01-elements/checkbox/just-a-function.js'
    }),
		// ,
		// new CopyWebpackPlugin({
		// 	from: `${PATHS.src}/fonts`, to: `${PATHS.assets}fonts`
		// })
	]
};