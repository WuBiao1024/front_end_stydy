const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env)=>{
    console.log(env);
    return {
        //配置入口文件
        // entry:'./src/index.js',
        entry: {
            index:'./src/index.js',
            another:'./src/another-module.js'
        },

        //输出配置
        output: {
            // filename: "bundle.js",
            filename: "script/[name].[contenthash].js",//防止浏览器误判
            // filename: "script/[name].bundle.js",
            path: path.resolve(__dirname,'./dist'),
            clean: true,
            assetModuleFilename: "asset/[contenthash][ext]",
            publicPath: "http://localhost:8080/"
        },
        mode:env.production ? 'production' : 'development',

        //错误代码提示
        devtool: 'inline-source-map',

        //插件
        plugins: [
            //指定模板输出到指定的文件，以及script标签的位置
            new  HtmlWebpackPlugin({
                //指定模板
                template: "./index.html",
                //输出的文件名
                filename: "app.html",
                inject: 'body'
            }),
            //指定样式的存放位置
            new MiniCssExtractPlugin({
                filename:'style/[contenthash].css'
            })
        ],

        devServer: {
            static:'./dist'
        },

        // 优化配置
        optimization: {
            minimizer: [
                new CssMinimizerPlugin()
            ],
            splitChunks: {
                // chunks: "all"

                //缓存组
                cacheGroups: {
                    vendor:{
                        //获取到node_modules文件
                        test: /[\\/]node_modules[\\/]/,
                        name:'vendors',
                        chunks: "all",
                    }
                }
            },

        },

        //资源管理
        module: {
            rules: [
                {
                    test: /\.(css|less)$/,
                    use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource"
                },
                {
                    test:/\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                ['@babel/plugin-transform-runtime']
                            ]
                        }
                    }
                }
            ]
        }


    }
}