// node_modules/.bin/webpack --mode=production --config webpack.config.production.js

const glob = require("glob");
const path = require( 'path' );

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry:
    { application:
      path.join(__dirname, 'app/javascript/packs/application.js') },

  output:
   { filename: '[name]-[hash].js',
     path: path.join(__dirname, 'public/packs'),
     publicPath: '/packs/' },

  resolve: {
    extensions:
      [ '.tsx',
        '.ts',
        '.jsx',
        '.mjs',
        '.js',
        '.sass',
        '.scss',
        '.css',
        '.png',
        '.svg',
        '.gif',
        '.jpeg',
        '.jpg' ],
    modules:
      [ path.join(__dirname, 'app/javascript'),
        'node_modules' ],},

  bail: true,
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
      })
    ]
  },
  module:
   { strictExportPresence: true,
     rules:
      [ { test: /\.(ts|tsx)?(\.erb)?$/,
          use: [ { loader: 'ts-loader', options: {} } ] },
        { test:
           /(.jpg|.jpeg|.png|.gif|.tiff|.ico|.svg|.eot|.otf|.ttf|.woff|.woff2)$/i,
          use:
           [ { loader: 'file-loader',
               options:
                { name: '[path][name]-[hash].[ext]', context: 'app/javascript' } } ] },
        { test: /\.(css)$/i,
          use:
           [ MiniCssExtractPlugin.loader,
             { loader: 'css-loader',
               options:
                { sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  modules: false } }, ],
          sideEffects: true },
        { test: /\.(scss|sass)$/i,
          use:
           [ MiniCssExtractPlugin.loader,
             { loader: 'css-loader',
               options:
                { sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  modules: false } },
             { loader: 'sass-loader', options: { sourceMap: true } } ],
          sideEffects: true },
        { test: /\.(js|mjs)$/,
          exclude: /@babel(?:\/|\\{1,2})runtime/,
          use:
           [ { loader: 'babel-loader',
               options:
                { babelrc: false,
                  presets: [ [ '@babel/preset-env', { modules: false } ] ],
                  cacheDirectory: 'tmp/cache/webpacker/babel-loader-node-modules',
                  cacheCompression: true,
                  compact: false,
                  sourceMaps: false } } ] },
        { test: /\.(js|jsx|mjs)?(\.erb)?$/,
          exclude: /node_modules/,
          use:
           [ { loader: 'babel-loader',
               options:
                { cacheDirectory: 'tmp/cache/webpacker/babel-loader-node-modules',
                  cacheCompression: true,
                  compact: true } } ] } ] },
  plugins:
    [ new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env))),
      new CaseSensitivePathsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash:8].css'
      }),
      new WebpackAssetsManifest({
        writeToDisk: true,
        publicPath: true
      }),
      new OptimizeCSSAssetsPlugin() ],

};
