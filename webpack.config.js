const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            exclude: '/node_modules',
            use:{
                loader: 'babel-loader',
                options:{
                    presets:['@babel/preset-env','@babel/preset-react']
                }
            }
    }]},
    plugins:[
        new HtmlWebpackPlugin({
            inject:'body',
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    devServer:{
        static:path.join(__dirname,'.dist'),
        compress:true,
        historyApiFallback: true,
        port:3003,
        open:true
    }
}