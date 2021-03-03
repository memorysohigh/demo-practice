let context = 'red,blue,black,yellow'
let value = context.split(/[^,]+/);
console.log(value);
let arry = [1, 2, 3, 4, 56, 7, 8]
let n = arry.slice(1, 2)
let m = arry.splice(1, 2)

console.log(n);
console.log(m);
let localeCompareValue = context.localeCompare('a') //首字母比大小
console.log('首字母比大小:' + localeCompareValue);
let a = Math.floor(2 * Math.random() + 8)
console.log(a);

function person() {

}

function man() {

}
person.Name = "person's name";


man.prototype = new person()

// var man1 = new man('liufu',28)
console.log(man.Name);


function person() {}
let child = new person;
console.log(person[Symbol.hasInstance](child));

let arr = [1, 2, 3, 4, 5, 7]
for (const iterator of arr[Symbol.iterator]()) {
    console.log(iterator);
}


let dd = Object.getOwnPropertyNames(Function.prototype)
let kk = Object.getOwnPropertySymbols(Function.prototype)
let mm = Function.prototype.hasOwnProperty('Symbol(Symbol.hasInstance)')
console.log(dd);
console.log(kk);
console.log(mm);

let obj2 = {
    name: 'shasha',
    age: 25,
    sex: 'women',
    math: [1, 2, 3, 4, 5, 6, 7],
    length: 4
}
console.log(Array.from(obj2.math));

Array.from(obj2.math, function (x) { //映射函数等同于 .map()
    console.log(this.name + "\'s" + ':' + x);
}, {
    name: 'shasha'
})
let c = []
console.log(Array.isArray(c));