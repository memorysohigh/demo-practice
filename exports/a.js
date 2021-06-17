exports.name = 12
exports = {
    dd: 9999
}

console.log('exports:', exports);
console.log('module.exports:', module.exports)
console.log(module.exports == exports);
// 123
// exports是对module.exports的引用，向外暴露的还是module.exports