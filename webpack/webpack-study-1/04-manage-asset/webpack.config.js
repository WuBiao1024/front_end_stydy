const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const toml =require('toml')
const yaml = require('yaml')
const json5 = require('json5')



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
        // assetModuleFilename: "assets/test.jpg"
        assetModuleFilename: "assets/[contenthash][ext]"
    },
    // production 生产环境
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
        }),
        //把css 集成到一个文件，通过link标签引入
        new MiniCssExtractPlugin({
            filename: 'style/[contenthash].css'
        })
    ],

    //devServer 本质上仅仅是缓存在内存中，即使没有dist文件夹，也不影响服务的启动。
    devServer: {
      static: './dist'
    },

    //优化配置项
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin()
            //mode 改为production 才生效
        ]
    },

    //模块
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
                generator: {
                    // filename: 'images/test.jpg'
                    filename: 'images/[contenthash][ext]'
                },
                //设置临界值
                parser: {
                    dataUrlCondition:{
                        maxSize:4*1024*1024 //4M
                    }
                }
            },

            {
                //识别less和css
                test:/\.(css|less)$/,
                //顺序不能乱，从右向左
                // css-loader 使得项目认识css(不报错)，style-loader 把样式加到页面
                // use: [`style-loader`,'css-loader','less-loader'],
                //MiniCssExtractPlugin.loader 抽离和压缩css
                use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource"
            },
            //npm i csv-loader
            //npm i xml-loader
            {
                test:/\.(csv|tsv)$/,
                use:'csv-loader'
            },
            {
                test:/\.xml$/,
                use:'xml-loader'
            },
            // npm i toml yaml json5 -D
            {
                test:/\.toml$/,
                type:'json',
                parser:{
                    parse:toml.parse
                }
            },
            {
                test:/\.yaml$/,
                type:'json',
                parser:{
                    parse:yaml.parse
                }
            },
            {
                test:/\.json5$/,
                type:'json',
                parser:{
                    parse:json5.parse
                }
            }
        ]
    },

}