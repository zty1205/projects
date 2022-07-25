const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: './loaders/clean-log-loader'
      },
      {
        test: /\.js$/,
        loader: './loaders/babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: './loaders/file-loader',
        type: 'javascript/auto' // 阻止webpack默认的assets loader处理图片资源
      },
      {
        test: /\.css$/,
        use: ['./loaders/style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`
    }
  },
  mode: 'development'
};
