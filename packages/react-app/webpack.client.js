const path = require('path');
const StatsWebpackPlugin = require('stats-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = function () {
  return {
    devServer: {
      historyApiFallback: true,
      stats: 'minimal',
    },
    devtool: 'inline-source-map',
    entry: {
      client: path.resolve(__dirname, 'src/client/index.tsx')
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-modules-typescript-loader',
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
                modules: true
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          include: path.resolve(__dirname, 'src/client')
        }
      ]
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
          }
        }
      }
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[id].[contenthash:8].js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        PRODUCTION: JSON.stringify(false),
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin(),
      new StatsWebpackPlugin('stats-client.json')
    ].filter(Boolean),
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      },
      extensions: ['.ts', '.tsx', '.js']
    },
    stats: 'minimal',
    target: 'web'
  };
}
