# 学习笔记
镜像
npm config set registry https://registry.npm.taobao.org
npm install --registry=https://registry.npm.taobao.org
npm config set proxy null
npm config set https-proxy null
## 基本命令
1. 全局安装 webpack `npm i webpack webpack-cli --global`
2. 初始化 `npm init -y`
3. 本地安装 `npm install webpack webpack-cli --save-dev`
4. 打包 `webpack`
5. 打包详细信息 `webpack --stats detailed`
6. 卸载 `npn uninstall webpack webpack-cli --global`
7. npx  依托npm 查看命令是否可以执行
8. `npx webpack --entry ./src/index.js --mode production` 打包同时指定入口文件和模式
9. `npx webpack --help` 查看命令
10. `npx webpack --watch` 实时监测变化

## 插件
1. html-webpack-plugin

 `npm install html-webpack-plugin -D` 本地安装插件 配置插件查看配置文件
```js
  plugins: [
    new HtmlWebpackPlugin({
        // 指定目标模板
        template: './index.html',
        //指定输出的文件名
        filename: 'app.html',
        //script标签的位置
        inject:'body'
    })
]
```

## 使用 webpack dev server 模拟服务器
1. 安装 `npm i webpack-dev-server -D`
2. 配置 
```js
//webpack.config.js
 devServer: {
    //打包的路劲
      static: './dist'
    }
```
3. 启动 `npx webpack-dev-server`

## source-map
```js
    //指定代码报错的位置
    devtool: 'inline-source-map'
```

## 资源管理
只有对指定资源的资源类型进行配置申明，才能在js文件中导入使用相关资源。并且按照配置的规则进行响应的打包。
比如generator配置项可以指定打包资源的路径。
1. 配置
```js
 module: {
        rules: [
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
            }
        ]
    }
```
2. 配置项的区别
- `asset/resource` 导出url
- `asset/inline` 导出资源的base-64格式
- `asset/source` 导出资源的源代码
- `asset` 通用资源类型 在`asset/resource`和`asset/inline`中选择，默认4k作为临界。小于4K inline 大于4K resource,parser配置项改变临界值。

## loader 
默认情况下 webpack 只能识别js 和json 这种文件，需要loader的帮助才能让webpack 识别一些特殊资源。
使用步骤：
1. 解析css的loader为例  `npm i css-loader -D`
2. 把css放到页面上`npm i style-loader -D` 
3. 解析less `npm i less-loader less -D` 
```js
 {
    //识别less和css
    test:/\.(css|less)$/,
    //顺序不能乱，从右向
    use: [`style-loader`,'css-loader','less-loader'],
}
```
4. link 标签引入的方式整合并使用css  插件 `npm i mini-css-extract-plugin -D` (基于webpack 5)
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
{
    //识别less和css
    test:/\.(css|less)$/, 
    use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
}
```
5. 压缩css的体积的插件 `npm i css-minimizer-webpack-plugin -D`
配置
```js


optimization: {
    minimizer: [
        new CssMinimizerWebpackPlugin()
        //mode 改为production 才生效
    ]
},
mode:'production'
```

## bable的使用
安装
npm i babel-loader @babel/core @babel/preset-env -D
npm i @babel/runtime -D
npm i @babel/plugin-transform-runtime -D
<!-- 配置见06-babel-loader -->
为什么使用：
1.webpack 原生支持 将高版本的js转换为低版本 es6=>es5

## 代码分离
1. 配置多个入口和出口节点 （问题：如果有多个入口，不同入口共享的文件在不同的包里面会重复被打包）
```js
    // entry: './src/index.js',
    entry:{
        index:'./src/index.js',
        another:'./src/another-module.js'
    },
    //多个入口对应多个出口
    output: {
        // filename: "bundle.js",
        filename:'[name].bundle.js',
        
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename: "asset/[contenthash][ext]"
    },
```
2. 防止重复 使用Entry完整配置项 dependOn 或者 SplitChunks优化配置
- 第一种配置
```js
    optimization:{
        //生产环境下可以降低css的体积
        minimizer:[
            new CssMinimizerPlugin()
        ],
        //提取公共的代码
        splitChunks:{
            chunks:"all"
        }
    }
```
- 第二种配置
```js
    entry:{
        index:{
            import: './src/index.js',
            dependOn:'shared',
        },
        another:{
            import: './src/another-module.js',
            dependOn:'shared',
        },
        shared:'lodash'
    },
    output: {
        // filename: "bundle.js",
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename: "asset/[contenthash][ext]"
    },
```
3. 动态导入 （import函数）
```js
function getComponent(){
    // 不写 默认是第一次访问的时候加载
    //webpackPrefetch:当网页都加载完毕网页空闲的时候再去加载打包好的math.bundle.js 预加载（既不影响首屏，也不影响用户体验）
    //webpackPreload: 当用户第一次点击的时候加载 
    return import(/*webpackChunkName:'math',webpackPreload:true*/'lodash')
        .then(({default:_})=>{
            const element = document.createElement('div');
            element.innerHTML = _.join(['hello','webpack']," ")
            return element
        })
}
getComponent().then((element)=>{
    document.body.appendChild(element);
})
```
注意：一旦加入静态导入，动态导入就会失效（需要打开优化配置中的splitChunks）

## cache(缓存)
打包到dist,部署到服务器

缓存：通过命中缓存的方式降低网络流量，是网站加载速度更快。然而：部署新版本的时候，没有修改文件名，导致浏览器认为文件没有修改（误判）
解决：配置文件路劲中包括contenthash，这样内容变化就可以导致文件名变化。（可替换模板字符串定义contenthash）
```js
  output: {
    // filename: "bundle.js",
    filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename: "asset/[contenthash][ext]",
}
 
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
```

## js打包到同一个文件夹中
```js
    output: {
    // filename: "bundle.js",
    filename: "script/[name].[contenthash].js",//防止浏览器误判
        // filename: "script/[name].bundle.js",
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename: "asset/[contenthash][ext]",
}
```

## 开发环境和生产环境的配置
1. publicPath 配置 可以指定cdn的路径或者是服务器的路劲
```js
    output: {
    // filename: "bundle.js",
    filename: "script/[name].[contenthash].js",//防止浏览器误判
        // filename: "script/[name].bundle.js",
        path: path.resolve(__dirname,'./dist'),
        clean: true,
        assetModuleFilename: "asset/[contenthash][ext]",
        publicPath: "http://localhost:8080/"
},
```

2. 环境变量 消除开发环境和生产环境的差异 
- 指定环境打包 ` npx webpack --env production` 
- 压缩js代码 `npm i terser-webpack `
- 
3. 








 




