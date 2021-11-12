//Primitive
let id: number = 5;
let Myname: string ="Jakrit Poopeasert";
let isPublished: boolean = true;
let x: any ="Hello Jakrit";

console.log("ID: "+ typeof(id) + " " + id)
console.log("Name: "+ typeof(Myname) + " " + Myname)
console.log("isPublished: "+ typeof(isPublished) + " " + isPublished)
console.log("X: "+ typeof(x) + " " + x)


//ใช้ Back tick  ``````````````

let age:number = 19
console.log(`My name is ${Myname}. I am ${age} years old.`)

//collection types
let ids:number[]
ids = [1,2,3,4,5]

let arr: any[];
arr = [1, "2" , true, 3.5]

//Create an array to store your friends name
let friends: string[];
friends = ["Thanakit","kongpop","wasok","Pantira","baszaa"]

console.log(ids)
console.log(arr)
console.log(friends)

//ตัวแบบ Array ใน ts js จะมีเมธอดสำหรับวนลูป (itereate)
console.log(": นี่คือเพื่อนของฉัน :")
friends.forEach(i => {
    console.log(`: ${i}`)

});

let salary : number[] = [1000,2000,5000,10000];
let commission:number[]=[];

salary.forEach((s)=>{
    commission.push(s*0.1)
});
console.log(commission)
console.log("-------------------------")

//ให้หาโบนัสของแต่ละคนเงิน <= 1000 โบนัส 2 เท่า
// 1001 - 5000 โบนัส 1.5 เท่า
// 5001 - 10000 โบนัส 1.2 เท่า
// 10001 ++ โบนัส 1 เท่า
salary = [1000,2000,5000,10000]
let bonus: number[] = []
salary.forEach((s)=>{
    if(s <= 1000){
        bonus.push(s*2);
    }
    else if (s <= 5000){
        bonus.push(s*1.5);
    }
    else if ( s <= 10000){
        bonus.push(s*1.2);
    }
    else{
        bonus.push(s*1);
    }
});
console.log(salary)
console.log(bonus)

// salary.forEach(function(s){
// })

let prod1: [number, string, string, number]
prod1 = [1,"Chocolate","Pack", 100]

// console.log(prod1[0])
// console.log(prod1[1])
// console.log(prod1[2])
// console.log(prod1[3])

prod1.forEach(p=>{
    console.log(p)
})

// let products = []
// products.push(products)
// console.log(products)

let products : [number, string ,string,number][]
products = [
    [1,"Strawberry","pcs",20,],
    [2,"Apple","pcs",25,],
    [3,"Banana","pcs",10,],
    [4,"Kiwi","pcs",30,],
    [5,"Orange","pcs",25,]
]

products.forEach(p=>{
    p[3] += 5;
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`)
})

console.log("-------------------------")

let students : [string, string, number,number,number][];
students = [
    ["1001", "jakrit" ,20,50,0],
    ["1002", "Thanakit" ,18,42,0],
    ["1003", "kongpop" ,21,49,0],
    ["1004", "wasok" ,15,35,0],
    ["1005", "taned" ,17,31,0]
]

//ให้ update คะแนนรวม แสดงรหัส ชื่อ และคะแนนรวม
// แสดงเป็น
// ID: name, total:xx

students.forEach(p=>{
    p[4] +=  p[2]+ p[3];
    console.log(`${p[0]} : ${p[1]} Total : ${p[4]}`)
})

console.log("-------------------------")

enum direction{
    Up=1,
    Down=3,
    Left=5,
    Right=7
}

enum direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right"
}
console.log(direction.Left)
console.log(direction.Down)

console.log("-------------------------")

//สร้าง pdf 
// setpaper(size, orientation)
// 0:A3 1:A4 2:A5 3:A6
// 1:Portrait 0:Landscape

enum PaperSize{
    A3 = 1,
    A4 = 2,
    A5 = 3,
    A6 = 4
}
enum Orientation{
    Portrait = 1,
    Landscape = 2
}
console.log(PaperSize)
// setPaperSize(PaperSize.A4, Orientation.Landscape)
console.log("-------------------------")
//Defind Type
type Student = {
    id: number,
    name: string,
    tel:string
    line_id?:string            //optional -
}
let wasok: Student = {
    id: 101,
    name:"Wasok" , tel:"097000"
}
console.log(wasok.id)
console.log(wasok.tel)
// let wasok: Student
// wasok.id = 101;
// wasok.name = "wasok";
// wasok.tel = "0977777777";

console.log("-------------------------")

//Type Assertion
let xx : any = false

//ตั้งใจให้เป็น number
let xid:number
xid = <number> xx
console.log(typeof(xid))
console.log(xid)

console.log("-------------------------")
console.clear()

//Union Type
let sid : number | string
sid = 101;
console.log(typeof(sid))

sid = "555";
console.log(typeof(sid))
console.log("-------------------------")

//function
//addNumber จะ retrue type อะไรบ้าง

function addNumber(x:number,y:number){
    return x + y
}
console.log(addNumber(1,3))
// console.log(addNumber(1,"3"))

function showLog(m: number | string): void{
    console.log(m)
}
showLog(123)
showLog("456")
console.log("-------------------------")

//โครงเปล่าของ function ที่ไม่ได้กำหนดการทำงาน

interface MathFunc{
    (x: number, y: number) : number
}

const addNum : MathFunc = (x:number, y:number): number => { return x+y }
const subNum : MathFunc = (x:number, y:number): number => x-y

console.log(addNum(5,7));
console.log(subNum(5,7));

// Interface classes

interface Human{
    id:number,
    name:string,
    age:number,
    tel?:string
    //function
    move() : string
    eat() : string
}

// const student : Human = {
//     id : 123,
//     name : "Jakrit",
//     age : 30,
//     tel :"0977777777",
//     move : function() : string{
//         return "Running"
//     }
// }

// const grandMom : Human = {
//     id:9,
//     name:"Pao",
//     age:60,
//     move :  function() : string{
//         return "Jume"
//     }
// }

const boxer : Human = {
    id:106,
    name:"Jakrit",
    age:19,
    move :  function() : string{
        return "walk"
    },
    eat : function() : string{
        return "fried rice"
    }
}// Jakrit
const pilot : Human = {
    id:102,
    name:"Kong",
    age:29,
    move :  function() : string{
        return "fly"
    },
    eat : function() : string{
        return "fried rice"
    }
}

// console.log(student.move())
// console.log(grandMom.move())

class Driver implements Human{
    id: number
    name: string
    age: number

    constructor(id: number,name: string,age:number){
        this.id = id
        this.name = name
        this.age = age
    }


move(){
    return `${this.name} move by driving` 
}
eat(){
    return `${this.name} eats rice` 
    }
}
console.clear()
const d1 = new Driver(101,"Jakrit",20)
console.log(d1.move())
console.log(d1.eat())

// generic
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let n1 = [1,2,3,4]
let n2 = ["a","b","c","d"]
console.log(getArray([n1,n2]))


//Q1 ให้สร้าง tupleของนักเรียน id name mid final project grade
//output <id><name>



//Q2การบ้าน implement 1 อาชีพ จาก human
//แสดง move eat
//object

