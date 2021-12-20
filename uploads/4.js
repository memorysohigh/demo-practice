let a = 0
console.log(4);
console.time('4.js:')
let tt = setInterval(() => {
    // console.log('4.jssssssssssssssss' + a);
    a++
    if (a == 250) {
        clearInterval(tt)
        console.timeEnd('4.js:')
    }
}, 1);