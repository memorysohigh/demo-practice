const path = require('path')
const fs = require('fs')

// let filePath = path.join('F:\\桌面\测试图片', '【11】从零玩转Webpack4+实现原理')

// 1. 定义两个工具函数
// 获取指定目录路径下的所有文件名
const getFileNames = path => {
    // 使用readdir获取指定目录下的所有文件名
    return fs.readdirSync(path);;
}

// 根据指定字符截取文件名，返回截取后的字段
const getFileSuffix = (fileName, splitChar) => {
    // 取字符第一次出现的位置
    const first = fileName.indexOf(splitChar);
    // 取字符最后一次出现的位置（根据需要选择）
    // const first = fileName.lastIndexOf(splitChar);
    const last = fileName.indexOf(' ');

    const namelength = fileName.length; //取到文件名长度
    return fileName.substring(last + 1, namelength); //截取获得后缀名
}

// 2. 定义目录
// const dirName = `D:\\3. 生活\\3.2 文件下载\\硕鼠下载\\我的解析任务1912152356`;
const dirName = `B:\\学习视屏\\【01】从零玩转HTML5+CSS3精讲`;

// 3. 读取与改写
let files = getFileNames(dirName);
files.forEach((item, i) => {
    // 这里对旧名操作获取新名
    let newName = getFileSuffix(item, "1")
    // 使用rename方法进行重命名
    fs.rename(`${dirName}\\${item}`, `${dirName}\\${newName}`, (err) => {
        if (err) throw err;
        console.log('重命名完成');
    });
})