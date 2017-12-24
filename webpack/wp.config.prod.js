var webpack = require('webpack')
var config = require('./wp.config.base')

config.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
				'process.env': '"prod"'
		}),
		// new webpack.optimize.UglifyJsPlugin({
		// 	compressor: {
		// 		warnings: false,
		// 		drop_console: true
		// 	},
		// 	output: {
		// 		comments: false
		// 	}
		// }),
		new webpack.LoaderOptionsPlugin({
				minimize: true
		}),
])
config.devtool = '#cheap-module-source-map'
module.exports = config
