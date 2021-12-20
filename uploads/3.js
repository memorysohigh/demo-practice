let a = 0
console.log(3);
console.time('3.js:')
let tt = setInterval(() => {
    // console.log('3.jssssssssssssssss' + a);
    a++
    if (a == 250) {
        clearInterval(tt)
        console.timeEnd('3.js:')
    }
}, 1);