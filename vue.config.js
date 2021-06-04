// vue.config.js
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const CompressionWebpackPlugin = require("compression-webpack-plugin");
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
  lintOnSave: false,
  devServer: {
    open: true,  // 自动打开浏览器
    hot: true, // 实时打包编译
    host: "0.0.0.0",
    inline: true,  // 表示实时刷新浏览器
    port: "9259"   // 指定打开浏览器的端口号
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionWebpackPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: productionGzipExtensions,
            threshold: 2048,
            minRatio: 0.8,
            deleteOriginalAssets: true // 不删除源文件
          })
        ]
      };
    }
  }
};
