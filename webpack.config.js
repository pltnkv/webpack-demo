var path = require('path')

module.exports = {
    entry: "./src/entry",
    output: {
        path: path.resolve("./out"),
        filename: "bundle.js"
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ["", ".webpack.js", ".web.js", ".js"]
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
            compilerOptions: {
            target: 'ES5'
        }
    }
};