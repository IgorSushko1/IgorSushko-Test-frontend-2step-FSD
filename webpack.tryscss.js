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
					{
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
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
				use: [
					{loader: "file-loader",
				options: {
					name: "[name].[ext]",
					// outputPath: "imgs",
					// publicPath: "imgs"
					}
				},
					// {loader: 'image-webpack-loader',
						// options: {
							// bypassOnDebug: true, // webpack@1.x
							// disable: true, // webpack@2.x and newer
						// }},
					
				]
			},
			{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
            },
          },
        ],
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
			title: "Ui-kit",
			template: './src/index.pug'
		}),
		new HtmlWebpackPlugin({
			title: "1st landing page",
			template: './src/landing-one.pug'
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