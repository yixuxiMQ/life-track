module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                'data': '@/assets/data',
                'images': '@/assets/images',
                'js': '@/assets/js',
                'styles': '@/assets/styles',
                'components': '@/components',
                'utils': '@/utils',
                'models': '@/models'
            }
        }
  }
}