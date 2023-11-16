//引入一个包
const path =require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


//webpack中的所有配置信息都写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    mode: 'development',


    //打包文件所在的目录
    output: {
        //指定打包文件所在的目录,__dirname 完整路径
        path: path.resolve(__dirname,'dist'),

        //打包后的文件
        filename: "boudle.js",
    },
    //打包时使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定规则生效的文件
                test:/\.ts$/,
                //使用的loader
                use: 'ts-loader',
                //要排除的文件
                exclude: /node-modules/,
            }
        ]

    },

    //配置webpack的插件
    plugins: [
        new HTMLWebpackPlugin({
            //title: "hello,wubiao"
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ]
}