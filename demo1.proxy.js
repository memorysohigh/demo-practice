// var a = {'name':'didi'}
// var proxy = new Proxy(a,{
//     get:function (target,propKey){
//         console.log('propKey is:'+propKey);
//     },
//     set:(target,propKey,value,receiver)=>{
//         console.log(`
//         poropKey is: ${propKey}
//         value is: ${value}
//         `)
//     }
// })
// proxy.name
// proxy.name = 'gege'

//////////////////////////////////////////////////////////////////////////////////////////////
var a = {
  'name': 'didi',
  'age': '13',
  'heihgt': '180cm'
}
var obj = Object.create(new Proxy(a, {
  get: (target, propKey) => { //target其实对应的就是 a 对象
    console.log(`get 通过了的你的访问`)
    console.log(`访问的是${propKey}，实例上没有${propKey}，所以访问的是原型上的值为 ${target[propKey]}\n`);
  },
  set: (target, propKey, value) => { //target其实对应的就是 a 对象
    target[propKey] = value
    console.log(`你正在设置${propKey}的值，这个属性位于obj的原型上,修改后的值为${value} \n`);
  },
}))
obj.name
obj.name = 11
obj.name
a.name

//////////////////////////////////////////////////////////////////////////////////////////////
// var targetObj = {
//     name:'wjh',
//     age:'24',
//     tel:'13385427717',
//     heihgt:'180'
// }

// var obj = new Object(
//     new Proxy(targetObj,{
//         get:(target,propKey)=>{
//             console.log(propKey+":"+target[propKey]);
//         },
//         set:(target,propKey,value)=>{
//             console.log(propKey+"(NEW):"+value+"\n"+propKey+"(OLD):"+target[propKey]);
//         }
//     })
// )

// obj.name
// obj.age = 30


//////////////////////////////////////////////////////////////////////////////////////////////
var pipe = function (value) {
  var funcStack = [1, 2];
  var oproxy = new Proxy({}, {
    get: function (pipeObject, fnName) {
      console.log(pipeObject, fnName);
      if (fnName === 'get') {
        return funcStack.reduce(function (val, fn) {
          console.log(val, fn);
          return val;
        }, value);
      }
      //   funcStack.push(window[fnName]);
      return oproxy;
    }
  });

  return oproxy;
}
//////////////////////////////////////////////////////////////////////////////////////////////
// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;

// console.log(pipe(3).double.pow.reverseInt.get); // 63

// let arr=[1,2,3]
// //返回的值作为第一项
// arr.reduce((a,b)=>{console.log(a,b);
// return b
// })