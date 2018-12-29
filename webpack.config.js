const glob = require("glob");
const path = require( 'path' );

const entryPath = path.join('app', 'javascript', 'packs');
const packs = path.join(__dirname, entryPath);
const targets = glob.sync(path.join(packs, '**/*.{js,jsx,ts,tsx}'))
const entry = {};

targets.forEach((target) => {
  const bundle = path.relative(packs, target);
  const ext = path.extname(bundle);
  entry[bundle.replace(ext, '')] = './' + path.join(entryPath, bundle);
});

//console.log(entry)
/*
 const entry = targets.reduce((entry, target) => {
   const bundle = path.relative(packs, target)
   //console.log(bundle)
   const ext = path.extname(bundle)

   return Object.assign({}, entry, {
     // Input: "application.js"
     // Output: { "application": "./application.js" }
     [bundle.replace(ext, '')]: './' + bundle,
   })
 }, {})
//console.log(targets)
//console.log(entry)
*/

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const PnpWebpackPlugin = require('pnp-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const safePostCssParser = require('postcss-safe-parser')

module.exports = {
  entry: entry,

  output:
   { filename: '[name]-[chunkhash].js',
     chunkFilename: '[name]-[chunkhash].chunk.js',
     hotUpdateChunkFilename: '[id]-[hash].hot-update.js',
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
        '.module.sass',
        '.module.scss',
        '.module.css',
        '.png',
        '.svg',
        '.gif',
        '.jpeg',
        '.jpg' ],
    plugins: [PnpWebpackPlugin],
    modules:
      [ '/Users/takehiko/git/spider2/coffeehub/app/javascript',
        'node_modules' ],},

  resolveLoader:
   { modules: [ 'node_modules' ],
     plugins: [ PnpWebpackPlugin.moduleLoader(module) ] },

  node:
   { dgram: 'empty',
     fs: 'empty',
     net: 'empty',
     tls: 'empty',
     child_process: 'empty' },
  devtool: 'nosources-source-map',
  stats: 'normal',
  bail: true,
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
        terserOptions: {
          parse: {
            // Let terser parse ecma 8 code but always output
            // ES5 compliant code for older browsers
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true
          }
        }
      })
    ]
  },
  module:
   { strictExportPresence: true,
     rules:
      [ { parser: { requireEnsure: false } },
        { test: /\.(ts|tsx)?(\.erb)?$/,
          use: [ { loader: 'ts-loader', options: {} } ] },
        { test:
           /(.jpg|.jpeg|.png|.gif|.tiff|.ico|.svg|.eot|.otf|.ttf|.woff|.woff2)$/i,
          use:
           [ { loader: 'file-loader',
               options:
                { name: '[path][name]-[hash].[ext]', context: 'app/javascript' } } ] },
        { test: /\.(css)$/i,
          use:
           [ '/Users/takehiko/git/spider2/coffeehub/node_modules/mini-css-extract-plugin/dist/loader.js',
             { loader: 'css-loader',
               options:
                { sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  modules: false } },
             { loader: 'postcss-loader',
               options:
                { config: { path: '/Users/takehiko/git/spider2/coffeehub' },
                  sourceMap: true } } ],
          sideEffects: true,
          exclude: /\.module\.[a-z]+$/ },
        { test: /\.(scss|sass)$/i,
          use:
           [ '/Users/takehiko/git/spider2/coffeehub/node_modules/mini-css-extract-plugin/dist/loader.js',
             { loader: 'css-loader',
               options:
                { sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  modules: false } },
             { loader: 'postcss-loader',
               options:
                { config: { path: '/Users/takehiko/git/spider2/coffeehub' },
                  sourceMap: true } },
             { loader: 'sass-loader', options: { sourceMap: true } } ],
          sideEffects: true,
          exclude: /\.module\.[a-z]+$/ },
        { test: /\.(css)$/i,
          use:
           [ '/Users/takehiko/git/spider2/coffeehub/node_modules/mini-css-extract-plugin/dist/loader.js',
             { loader: 'css-loader',
               options:
                { sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  modules: true } },
             { loader: 'postcss-loader',
               options:
                { config: { path: '/Users/takehiko/git/spider2/coffeehub' },
                  sourceMap: true } } ],
          sideEffects: false,
          include: /\.module\.[a-z]+$/ },
        { test: /\.(scss|sass)$/i,
          use:
           [ '/Users/takehiko/git/spider2/coffeehub/node_modules/mini-css-extract-plugin/dist/loader.js',
             { loader: 'css-loader',
               options:
                { sourceMap: true,
                  importLoaders: 2,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                  modules: true } },
             { loader: 'postcss-loader',
               options:
                { config: { path: '/Users/takehiko/git/spider2/coffeehub' },
                  sourceMap: true } },
             { loader: 'sass-loader', options: { sourceMap: true } } ],
          sideEffects: false,
          include: /\.module\.[a-z]+$/ },
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
          include: '/Users/takehiko/git/spider2/coffeehub/app/javascript',
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
        filename: '[name]-[contenthash:8].css',
        chunkFilename: '[name]-[contenthash:8].chunk.css'
      }),
      new WebpackAssetsManifest({
        integrity: false,
        entrypoints: true,
        writeToDisk: true,
        publicPath: true
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        cache: true,
        test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/
      }),
      new OptimizeCSSAssetsPlugin({
        parser: safePostCssParser,
        map: {
          inline: false,
          annotation: true
        }
      }) ],

};

// const util = require('util')
// console.log(util.inspect(module.exports, false, null, true /* enable colors */))
