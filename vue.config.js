const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: '/',
    outputDir: "dist",
    assetsDir: "static",
    devServer: {
        port: '9527',
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            "": {
                // target: 'http://132.232.122.151:9051/',
                target: "http://47.115.57.59:3000/",
                changeOrigin: true,
                pathRewrite: {}
            }
        }
    },
    pluginOptions: {
        svgSprite: {
            /*
             * The directory containing your SVG files.
             */
            dir: 'src/assets/icons',
            /*
             * The reqex that will be used for the Webpack rule.
             */
            test: /\.(svg)(\?.*)?$/,
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            loaderOptions: {
                extract: true,
                spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
            },
            /*
             * @see https://github.com/kisenka/svg-sprite-loader#configuration
             */
            pluginOptions: {
                plainSprite: true
            }
        }
    },
    chainWebpack: config => {
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        //const svgRule = config.module.rule('svg')
        //svgRule.uses.clear()
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/icons')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    configureWebpack: () => ({
        // resolve: {
        //   alias: require('./alias.config').webpack
        // }
        // module: {
        //   rules: [{
        //     test: /\.svg$/,
        //     use: [{
        //       loader: "svg-sprite-loader",
        //       options: {
        //         symbolId: 'icon-[name]'
        //       }
        //     }]
        //   }]
        // }
    })
}