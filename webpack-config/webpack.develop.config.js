/**
 * @Author:      allenAugustine
 * @DateTime:    2017-08-23 09:23:30
 * @Description: 开发环境(develop)
 */
var path = require('path');
var webpack = require('webpack');

//项目根目录
const BASE_ROOT_DIR = path.resolve(__dirname, '../');
const DIR_CONGIG = {
  entry: path.resolve(BASE_ROOT_DIR, './src/entry/index.js'),
  outputPath: path.resolve(BASE_ROOT_DIR, './build/'),
  devContentBase: path.resolve(BASE_ROOT_DIR, './src/')
}

module.exports = {

  //程序入口
  entry: ['babel-polyfill','whatwg-fetch',DIR_CONGIG.entry],

  output: { //程序出口
    path: DIR_CONGIG.outputPath,
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  devServer: { //webpack-dev-server工具配置
    proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:8088 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:8088',
        secure: false
      }
    },
    port: 8090,
    contentBase: DIR_CONGIG.devContentBase,
    inline: true,
    historyApiFallback: true,
    hot:true
  },

  module: {
    rules: [
      { //es6 对jsx的解析
        test: /(\.js|\.jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      },
      { //es6 对json的解析
        test: /\.json$/,
        use: {
          loader: 'josn-loader'
        }
      },
      { //引用css文件
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins:[
                require('autoprefixer')
              ]
            }
          }
        ]
      },
      { //引用less文件
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins:[
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      { //引用图片文件
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000
            }
          }
        ]
      },
      { //引用字体文件
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
