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
        clean:true
    },
    mode:'production',

    plugins: [
        new HtmlWebpackPlugin({
            // 指定目标模板
            template: './index.html',
            //输出的文件名
            filename: 'app.html',
            //script标签的位置
            inject:'body'
        })
    ]
}