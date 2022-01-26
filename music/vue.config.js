module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    exclude: /node_moudles/,
                    loader:'html-loader',
                    // use: {
                    //     loader: 'html-loader',
                    //     options: {
                    //         minimize: true
                    //     }
                    // }
                }
            ]
        }
    }
}