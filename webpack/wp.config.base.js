var path = require('path')
var webpack = require('webpack')
var ENV = process.env.ENV
var CDN = process.env.CDN
var ROOT = path.resolve(__dirname, '../')
var tpl = './vtpl-loader.js'

module.exports = {
	entry:  path.resolve(ROOT, './src/app.js'),
	output: {
		filename: 'main.js',
		path: path.resolve(ROOT, './dist'),
		publicPath: CDN ? CDN : '/dist'
	},
	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.css/, loader: 'style-loader!css-loader' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']}},
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=1&name=./images/[name].[ext]' },
			{ test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' },
			{ test: /\.vtpl$/, loader: tpl }
		]
	},
	resolve: {
		extensions: ['.js', '.json', '.less'],
		alias: {
			'vue': 'vue/dist/vue.js',
			common: path.resolve(ROOT, './src/common'),
			assets: path.resolve(ROOT, './src/assets'),
			components: path.resolve(ROOT, './src/components'),
			'store': path.resolve(ROOT, './src/store'),
			'router': path.resolve(ROOT, './src/router'),
			'pages': path.resolve(ROOT, './src/pages'),
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: { // webpack-dev-server配置
			historyApiFallback: true,//不跳转
			noInfo: true,
			inline: true //实时刷新
	}
}
