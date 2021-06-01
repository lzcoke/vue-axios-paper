// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // 选项...
  lintOnSave: false,
  devServer: {
    open: true,  // 自动打开浏览器
    hot: true, // 实时打包编译
    host: '0.0.0.0',
    inline: true,  // 表示实时刷新浏览器
    port: '9259'   // 指定打开浏览器的端口号
  }
}