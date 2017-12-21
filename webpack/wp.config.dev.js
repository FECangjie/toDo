var webpack = require('webpack')
var config = require('./wp.config.base')

config.plugins = [
	new webpack.DefinePlugin({
			'process.env': '"dev"',
			env: '"dev"'
	}),
]
config.devtool = '#cheap-module-eval-source-map'
module.exports = config
