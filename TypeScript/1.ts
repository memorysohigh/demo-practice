

// let str:number = 123
// let len = (str as unknown as string).length
// console.log(len);


// interface FullName{
//     [pro:string]:string
// }

// let obj:FullName = {
//     firstname:'456',
//     firstname3:'456',
//     firstname2:'456',
//     firstname1:'456',
// }

// interface nuberArray{
//     [pro:number]:string
// }

// let a:nuberArray = {
//     0:'asd'
// }

// a[0]='fdg'


/* let a2:ReadonlyArray<string> = ['1']

let get =<T>(v:T,len:number=8):T[]=>{
    return new Array(len).fill(v)
}

let gg = get('777')
console.log(gg.length); */

/*
let getprop = <T,k extends keyof T>(obj:T,key:k):any=>{
    return obj[key]
}

let obj = {
    a:'a'
}

let y = getprop(obj,'a')
console.log(y);
 */

/* class person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}

// ||与上面等价
class stuideng {
    constructor(public name:string,public age:number){}
}

let a = new stuideng('asd',15)
console.log(a); */


/* abstract class pert{
    abstract name:string;
    abstract say():void;
}

class student extends pert{
    name:string = 'asda'
    say():void{}
} */

enum gender{
    male,
    female
}

interface testInterface{
    age:gender.male
}

class person implements testInterface{
    age:gender.male

}

