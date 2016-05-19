var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: {
		app_entry: "./src/entry",
		test_entry: "./tests/entry"
	},
	output: {
		path: path.resolve("./out"),
		filename: "[name].js"
	},
	resolve: {
		root: [path.resolve('./src'), path.resolve('./tests')],
		extensions: ["", ".webpack.js", ".web.js", ".js", ".ts"]
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
			{
				test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				loader: 'file?name=[path][name].[extlf]'
			},
			{
				test: /\.html$/,
				loader: "html"
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			globalVar: 'file.ts'
		})
	],
	ts: {
		transpileOnly: true,
		compilerOptions: {
			target: 'ES5',
			sourceMap: true
		}
	},
	devtool: 'inline-source-map'
};