// видимо это модуль, который позволяет 
// обращаться к пути других файлов
const path = require('path');
//для того, чтобы использовать плагины нужно reqire() их и добавить их в массив планигов
// большинство плагинов кастомизируются с помощью настроек
// так, я могу использовать один плагин несколько раз , каждый раз задавая разную конфигурацию
// для различных целей, для этого мне надо создать экземпляр плагина 
// вызвав plagins:[ new HtmlWebpackPlugin( {template: './src/index.html' } ) ]
const HtmlWebpackPlugin = require('html-webpack-plugin'); // устанавливается с npm
const webpack = require('webpack'); // получить доступ ко встроенным плагинам
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // добавил плагин, использую с sass



// настройки Вэбпака
module.exports = {
	// тип бандла бывает production, development, none. Тип влияет на то, 
	// минимизируется ли код, остаются ли комментарии итд и тп
	mode: 'development',
	// devtool: none,
	// задаю файл запуска
	entry: './src/index.js',
	// файл в котором вэбпак соберет все js
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	// в таких скобках добавляется загрузчик, 
	// тк изначально вэбпак понимает только JavaScript
	//  и JSON файлы
	// загрузики нужны чтобы конвертировать
	//  другие типы файлов в те, что прочтет браузер
	module: {
		rules: [{
				test: /\.pug$/,
				use: [
					// "html-loader",
					{
						loader: "pug-loader",
						options: {
							pretty: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					// fallback to style-loader in development
					// process.env.NODE_ENV !== 'development'
					//   ? 'style-loader'
					// :
					MiniCssExtractPlugin.loader,
					// 'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
			// {
			// у загрузчика два свойствав конфигурации вэбпака
			// // test - определяет разрешение файла, который надо обработать
			// test: /\.scss$/,
			// use - это свойства указывает на тот обработчик, который должен
			// быть использован для трансформации файлов
			// use: [
			// "style-loader", //3. Вставляет стили в DOM
			// "css-loader", //2. превращает css в common js
			// "sass-loader" //1. превращает sass в css
			// ]
			// эти два параметра - test и use являются конфигурацией правила
			// для одного модуля, этот код говорит вэб паку - 
			// "хэй - когда ты пойдешь по дереву зависимостей и встретишь там файл css
			// который запрашивается или импортируется куда-либо
			// используй "обработчик-css" чтобы трансформировать этот файл в нужный формат
			// до того, как он попадет в сборку"
			// },
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
		})
		// new MiniCssExtractPlugin({
		// параметры аналогичные параметрам в  webpackOptions.output, чтобы это ни значило
		// оба следующих условия опциональны
		// filename: '[name].css',
		// chunkFilename: '[id].css'
		// template: './src/style.scss'
		// }),

	]
};