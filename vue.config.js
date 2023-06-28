const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8081'
        }
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
})

