const path = require('path')
//插件的使用都需要require，然后new
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports={
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename: "asset/[contenthash][ext]"
    },
    // development、production
    mode:'development',

    //错误提示的位置
    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "app.html",
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename:'style/[contenthash].css'
        })
    ],

    devServer: {
        static: './dist'
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },

    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(css|less)$/,
                    use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
            }
        ]
    }

}