const path = require('path');
const webpack = require('webpack')
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env, argv) => {
    const config = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './htdocs/dist'),
            filename: 'client.js'
        },
        mode: argv.mode,
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: argv.mode !== 'production',
             }),
        ],
        module: {
            rules: [{
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/
            }]
        },
    };

    return config;
}