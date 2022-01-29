const  fs = require('fs')
const path = require('path')

//si
setTimeout(()=>{
    //  I/O
    let fileName= path.join(__dirname,'http.js')
    fs.readFile(fileName,(err,data)=>{
        //Promise3
        Promise.resolve().then(()=>{
            console.log("Promise3")})
        console.log(data)
    })
    setImmediate(()=>{
        console.log('setImmediate')
    })
    console.log('setTimeout1');
    //Promise1
    Promise.resolve().then(()=>{
        console.log('Promise1')})
    //next1
    process.nextTick(()=>{
        console.log('next1')
    })
})
console.log('同步代码 Start')
//s2
setTimeout(()=>{
    console.log('setTimeout2');
    //Promise2
    Promise.resolve().then(()=>{
        console.log('Promise2')})
    //next2
    process.nextTick(()=>{
        console.log('next2')
    })
})

console.log('同步代码 End')