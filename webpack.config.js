const path = require('path');

const env_mode = process.env.NODE_ENV || 'development'

module.exports = {
  entry: ['./src/javascript/entry.coffee', './src/style/entry.scss'],
  mode: env_mode,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    host: '0.0.0.0',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [
          {
            loader: 'coffee-loader',
            options: {
              transpile: { presets: ['env'] }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

