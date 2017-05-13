var path = require('path')
var webpack = require('webpack')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')
var tpl = require.resolve('./vtpl-loader.js')

module.exports = {
  // plugins: [commonsPlugin],
    entry: './src/main.js', // 入口文件
    output: {
        path: path.resolve(__dirname, './dist'), // Webpack结果存储
        publicPath: './dist/', // “publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
        filename: 'common.js'
    },
    module: {
      loaders: [
    { test: /\.vue$/, loader: 'vue-loader' },
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015']}},
    { test: /\.css$/, loader: 'style-loader!css-loader' },
    { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
    { test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: 'file-loader' },
    { test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/, loader: 'file-loader',
      query: {
        name: '[name].[ext]?[hash]'
      }
    },
    { test: /\.vtpl$/, loader: tpl }
  ]
 },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['.js', '.json', '.less'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            img: 'src/assets/img',
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {//webpack-dev-server配置
        historyApiFallback: true,//不跳转
        noInfo: true,
        inline: true//实时刷新
    },
    performance: {
        hints: false
    },
    // plugins: [
    // //压缩打包的文件
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     //supresses warnings, usually from module minification
    //     warnings: false
    //   }
    // })],
    devtool: '#eval-source-map'
  }

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compressor: {
            warnings: false,
            // remove `console.*`
            drop_console: true
          },
          output: {
            comments: false
          }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
