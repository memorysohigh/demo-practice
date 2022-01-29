const path = require('path')

module.exports={
    devServer:{

    },
    mode:'development',
    entry: "./b.js", // string | object | array
    output:{
        path:path.resolve(__dirname,'bunble'),
        filename: '[name].js', // string (default)
    },
    devtool:'eval-cheap-source-map',
    module: {},
    plugins:[],
}



