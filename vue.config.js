const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pwa: {
    workbox: {
      config: {
        debug: true
      }
    },
    // Cấu hình tệp Service Worker của bạn
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // Tên tệp Service Worker
      swSrc: './src/service-worker.js'
    },
    // Các tệp được bao gồm trong bản đệm (cache)
    exclude: [
      /\.map$/,
      /img\/icons\//,
      /favicon\.ico$/,
    ],
  },
  transpileDependencies: true
})
