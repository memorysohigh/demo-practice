let url = require('url')

let str =  "http://root:123456@www.it666.com.80/index.htm1?name=lnid&age=68#males"


let obj = url.parse(str,true)
console.log(obj);
console.log(obj.query.name);
console.log(obj.query.age);