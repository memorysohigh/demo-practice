let fs = require('fs')
let path = require('path')
let ContentTypeClass = require('../Content-type.json')

let readFile = function (req,res,rootPath){

    let extName = path.extname(rootPath)
    let type = ContentTypeClass[extName]
    if (type.startsWith("text")){
        type+=';charset=utf-8'
    }

    res.setHeader('Content-Type',type)
    // console.log(rootPath)
    fs.readFile(rootPath,(err,content)=>{
        if(err){
            res.end('Server Error')
        }else {
            console.log(111,content)
            res.end(content)
        }
    })
}

module.exports = readFile