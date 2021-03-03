// let nn = setTimeout(() => {
//     console.log(11111);
// }, 500)

// setTimeout(() => {
//     clearTimeout(nn)
// }, 1000)

let obj = {
    name: 'wjh',
    age: 25,
    baz() {
        console.log('My name:' + this.name, 'My age:' + this.age);
    }
}

var myReceiverObject = {
    name: 'dada',
    age: 50,
}

obj.baz()
console.log(Reflect.get(obj, 'baz'));

console.log('asd，asd fgd dfg'.split('，'));