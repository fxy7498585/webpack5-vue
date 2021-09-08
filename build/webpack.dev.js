const webpackBaseConfig = require('./webpack.config')


webpackBaseConfig.devServer = {
    port: 3004,
    hot: true,
    open: true,
}

module.exports = webpackBaseConfig;
