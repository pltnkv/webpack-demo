var path = require('path')

module.exports = function (config) {
	config.set({
		frameworks: ['jasmine'],
		files: [
			'out/test_entry.js'
		],
		reporters: ['progress'],
		preprocessors: {
			'out/test_entry.js': ['sourcemap']
		},
		port: 9876,
		colors: false,
		logLevel: config.LOG_DEBUG,
		autoWatch: true,
		singleRun: false,
		browsers: ['PhantomJS']
	});
};
