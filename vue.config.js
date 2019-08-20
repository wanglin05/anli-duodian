module.exports = {
    configureWebpack:{
        devServer:{
            proxy:{
                "/api":{
                    target:"http://169.254.25.83:7002",
                    pathRewrite:{
                        "^/api":""
                    }
                }
            }
        },
    }
}