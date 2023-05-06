const path = require('path');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  const config = {
    mode: argv.mode,
    target: 'node',
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './htdocs/dist'),
      filename: 'server.js',
      libraryTarget: "commonjs2",
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        'process.env.VUE_ENV': '"server"',
      }),
    ],
  };

  return config
}