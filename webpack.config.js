const path = require('path');

module.exports = {
  entry: './source/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [

      // SCSS
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          {
            loader: "@epegzz/sass-vars-loader",
            options: {
              files: [
                path.resolve(__dirname, './source/js/partials/data/_vars.js'),
              ],
            }
          }
        ]
      },

      // Babel
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }

    ]
  },
  watch: true
};
