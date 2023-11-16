const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    /*指定入口文件*/
    entry: './src/index.js',
    /*输出路径*/
    output: {
        filename: "bundle.js",
        /*绝对路径*/
        path: path.resolve(__dirname,'./dist'),
        //每次打包清除dist文件夹
        clean:true,

        //配置资源模块的文件名
        // assetModuleFilename: "images/test.jpg"
        assetModuleFilename: "images/[contenthash][ext]"
    },
    // production 生产环境 //生产环境可以配合第三方插件 压缩代码体积
    // development 开发环境
    mode:'development',

    //指定代码报错的位置，精准定位
    devtool: 'inline-source-map',

    //通过插件指定目标模板、输出的文件名、以及script标签的位置
    plugins: [
        new HtmlWebpackPlugin({
            // 指定目标模板
            template: './index.html',
            //输出的文件名
            filename: 'app.html',
            //script标签的位置
            inject:'body'
        })
    ],

    //devServer 本质上仅仅是缓存在内存中，即使没有dist文件夹，也不影响服务的启动。
    devServer: {
      static: './dist'
    },

    //资源模块
    module: {
        rules: [
            {
                //需要加载的文件类型
                test: /\.png$/,
                //导出资源的URL
                type: "asset/resource",
                //优先级高于output 的配置
                generator: {
                    // filename: 'images/test.jpg'
                    filename: 'images/[contenthash][ext]'
                }
            },
            {
                test: /\.svg$/,
                //导出base64 的格式
                type: "asset/inline",
            },
            {
                test:/\.txt$/,
                //导出资源的源代码
                type: "asset/source"
            },
            {
                //没设置generator 继承output的设置
                test:/\.jpg$/,
                //在asset/resource 和asset/inline之间选择
                //默认 大于8K resource 小于8K inline
                type: "asset",
                //优先级高于output 的配置
                //设置临界值
                parser: {
                    dataUrlCondition:{
                        maxSize:4*1024*1024 //4M
                    }
                },
                generator: {
                    // filename: 'images/test.jpg'
                    filename: 'images/[contenthash][ext]'
                },

            }
        ]
    }
}