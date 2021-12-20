let a = 0
// console.log(1);
// console.time('1.js:')
let tt = setInterval(() => {
    // console.log('1.jssssssssssssssss' + a);
    a++
    if (a == 250) {
        clearInterval(tt)
        // console.timeEnd('1.js:')
    }
}, 1);
// console.log(self);
self.postMessage(null)