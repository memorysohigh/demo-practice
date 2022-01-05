/*
const fs = require('fs')
const  path = require('path')

let readPath = path.join(__dirname,'待拷贝.js')
let writePath = path.join(__dirname,'拷贝副本.js')

let readableStream = fs.createReadStream(readPath)
let writeableStream = fs.createWriteStream(writePath)
readableStream.pipe(writeableStream)
*/

const fs = require('fs')
const path = require('path')

let readPath = path.join(__dirname, '待拷贝.js')
let writePath = path.join(__dirname, '拷贝副本.js')

let readableStream = fs.createReadStream(readPath, {encoding: "utf8", highWaterMark: 1})
readableStream.on('open', () => {
    console.log('读取文件连接已打开');
})
readableStream.on('error', () => {
    console.log('读取文件连接打开错误');
})
    readableStream.on('data',(data)=>{
    console.log('写入',data)
    writeableStream.write(data)
})
readableStream.on('close', () => {
    console.log('读取文件连接已关闭');
    writeableStream.end(() => {
        console.log('文件写入结束...........');
    })
})

let writeableStream = fs.createWriteStream(writePath, {encoding: "utf8", highWaterMark: 1})
writeableStream.on('open', () => {
    console.log('xieru文件连接已打开');
})
writeableStream.on('error', () => {
    console.log('xieru文件连接打开错误');
})
writeableStream.on('close', () => {
    console.log('xieru文件连接已关闭');
})