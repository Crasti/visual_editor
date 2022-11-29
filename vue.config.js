const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  chainWebpack(config) {
    config.output.filename("js/[name].js");
  }
})
