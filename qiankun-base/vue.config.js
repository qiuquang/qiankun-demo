
module.exports = {
  publicPath: '/',
  devServer: {
    port: 8080,
    proxy: {
      '/vip': {
        target: 'http://192.168.163.38:23333',
        changeOrigin: true,
        pathRewrite: {
          '^/vip': '/'
        }
      },
      '/sfss': {
        target: 'http://192.168.163.38:6001', // 服务器
        changeOrigin: true,
        pathRewrite: {
          '^/sfss': '/'
        }
      },
      '/ws': {
        target: 'http://192.168.163.38:9988',
        changeOrigin: true,
        pathRewrite: {
          '^/ws': '/'
        }
      }
    }
  },
};
