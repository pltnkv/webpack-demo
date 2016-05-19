var path = require('path')

module.exports = function (config) {
	config.set({
		frameworks: ['jasmine'],
		files: [
			'tests/*Test.ts'
		],
		reporters: ['progress'],
		preprocessors: {
			'tests/*Test.ts': ['webpack', 'sourcemap']
		},
		webpack: {
			resolve: {
				root: path.resolve('./src'),
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
			ts: {
				transpileOnly: true,
				compilerOptions: {
					target: 'ES5',
					sourceMap: true
				}
			},
			devtool: 'source-map'
		},
		port: 9876,
		colors: false,
		logLevel: config.LOG_DEBUG,
		autoWatch: true,
		singleRun: false,
		browsers: ['PhantomJS']
	});
};
