const webpack = require("webpack");
const path = require("path");
module.exports = {
    // 配置mui插件
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src"))
      .set("mui", path.resolve(__dirname, "./src/assets/mui/js/mui.js"));
  },
  configureWebpack: {
    // 增加一个plugins
    plugins: [
      new webpack.ProvidePlugin({
        mui: "mui",
        "window.mui": "mui"
      })
    ]
  },
    devServer:{
        host:"127.0.0.1",//ip
        port:8080,//端口
        proxy:{
          "/api":{
            target:"http://127.0.0.1:3000/api",
            changeOrigin:true,
            ws:true,
            pathRewrite:{
              "^/api":''
            }
          }
        }
    },
    lintOnSave:false //取消 eslint 验证
}