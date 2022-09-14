// exports.name = 12
// exports = {
//     dd: 9999
// }

// console.log('exports:', exports);
// console.log('module.exports:', module.exports)
// console.log(module.exports == exports);
// 12322
// 23
// exports是对module.exports的引用，向外暴露的还是module.exports


// export function A() {
//     console.log("我是A");
//     console.log("我是A");
//     console.log("我是A");
//     console.log("我是A");
//     console.log("我是A");
// };

let A = function () {
    console.log("我是A");
}
export default A