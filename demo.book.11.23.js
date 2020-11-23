// let context = 'red,blue,black,yellow'
// let value=context.split(/[^,]+/);
// console.log(value);
// let arry=[1,2,3,4,56,7,8]
// let n=arry.slice(1,2)
// let m=arry.splice(1,2)

// console.log(n);
// console.log(m);
// let localeCompareValue = context.localeCompare('z')
// console.log(localeCompareValue);
// let a= Math.floor(2*Math.random()+8)
// console.log(a);

function person() {

}

function man() {

}
person.Name = "person's name";


man.prototype = new person()

// var man1 = new man('liufu',28)
console.log(man.Name);