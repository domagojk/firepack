/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Webpack Configuration

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const path = require('path');
const webpack = require('webpack');

const dev = process.env.NODE_ENV !== 'production';

/**
 *  Webpack Configuration
 */
module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: './lib',
    library: 'Firepack',
    filename: dev ? 'firepack.dev.js' : 'firepack.prod.js',
    libraryTarget: 'umd',
  },
  externals: {
    firebase: 'firebase',
    immutable: 'immutable',
    lodash: 'lodash',
    react: 'react',
    'react-redux': 'react-redux',
    'react-router': 'react-router',
    'react-router-redux': 'react-router-redux',
    redux: 'redux',
    'redux-devtools': 'redux-devtools',
    'redux-devtools-dock-monitor': 'redux-devtools-dock-monitor',
    'redux-devtools-log-monitor': 'redux-devtools-log-monitor',
    'redux-thunk': 'redux-thunk',
    reselect: 'reselect',
  },
  plugins: dev ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ] : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel',
        ],
        include: [
          path.resolve(__dirname, './src'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
};
