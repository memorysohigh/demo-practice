let a = 250
console.log(2);
console.time('2.js:')
let tt = setInterval(() => {
    // console.log('2.jssssssssssssssss' + a);
    a--
    if (a == 0) {
        clearInterval(tt)
        console.timeEnd('2.js:')
    }
}, 1);