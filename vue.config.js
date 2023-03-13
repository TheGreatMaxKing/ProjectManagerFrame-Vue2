const path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
        path.resolve(__dirname, "./src/styles/variables.module.scss"),
        path.resolve(__dirname, "./src/styles/mixin.scss"),
      ],
    },
  },
  // 访问自定义后端跨域配置
  devServer: {
    proxy: {
      "/KellyServer": {  // /api是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会走到代理来。
        target: "http://10.60.140.126:9088", // 需要代理的域名，目标域名，会替换掉匹配字段之前的路径
        ws: false, // 是否启用websockets
        changeOrigin: true, //是否跨域
        pathRewrite: {  //重写匹配的字段，如果不需要放在请求路径上，可以重写为""
          "^/KellyServer": ""
        }
      },
      "/LucasServer": {  // /api是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会走到代理来。
        target: "http://10.62.145.158:8081", // 需要代理的域名，目标域名，会替换掉匹配字段之前的路径
        ws: false, // 是否启用websockets
        changeOrigin: true, //是否跨域
        pathRewrite: {  //重写匹配的字段，如果不需要放在请求路径上，可以重写为""
          "^/LucasServer": ""
        }
      },
    },
  }
})
