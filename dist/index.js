//Primitive
let id = 5;
let Myname = "Jakrit Poopeasert";
let isPublished = true;
let x = "Hello Jakrit";
console.log("ID: " + typeof (id) + " " + id);
console.log("Name: " + typeof (Myname) + " " + Myname);
console.log("isPublished: " + typeof (isPublished) + " " + isPublished);
console.log("X: " + typeof (x) + " " + x);
//ใช้ Back tick  ``````````````
let age = 19;
console.log(`My name is ${Myname}. I am ${age} years old.`);
//collection types
let ids;
ids = [1, 2, 3, 4, 5];
let arr;
arr = [1, "2", true, 3.5];
//Create an array to store your friends name
let friends;
friends = ["Thanakit", "kongpop", "wasok", "Pantira", "baszaa"];
console.log(ids);
console.log(arr);
console.log(friends);
//ตัวแบบ Array ใน ts js จะมีเมธอดสำหรับวนลูป (itereate)
console.log(": นี่คือเพื่อนของฉัน :");
friends.forEach(i => {
    console.log(`: ${i}`);
});
let salary = [1000, 2000, 5000, 10000];
let commission = [];
salary.forEach((s) => {
    commission.push(s * 0.1);
});
console.log(commission);
console.log("-------------------------");
//ให้หาโบนัสของแต่ละคนเงิน <= 1000 โบนัส 2 เท่า
// 1001 - 5000 โบนัส 1.5 เท่า
// 5001 - 10000 โบนัส 1.2 เท่า
// 10001 ++ โบนัส 1 เท่า
salary = [1000, 2000, 5000, 10000];
let bonus = [];
salary.forEach((s) => {
    if (s <= 1000) {
        bonus.push(s * 2);
    }
    else if (s <= 5000) {
        bonus.push(s * 1.5);
    }
    else if (s <= 10000) {
        bonus.push(s * 1.2);
    }
    else {
        bonus.push(s * 1);
    }
});
console.log(salary);
console.log(bonus);
// salary.forEach(function(s){
// })
let prod1;
prod1 = [1, "Chocolate", "Pack", 100];
// console.log(prod1[0])
// console.log(prod1[1])
// console.log(prod1[2])
// console.log(prod1[3])
prod1.forEach(p => {
    console.log(p);
});
// let products = []
// products.push(products)
// console.log(products)
let products;
products = [
    [1, "Strawberry", "pcs", 20,],
    [2, "Apple", "pcs", 25,],
    [3, "Banana", "pcs", 10,],
    [4, "Kiwi", "pcs", 30,],
    [5, "Orange", "pcs", 25,]
];
products.forEach(p => {
    p[3] += 5;
    console.log(`${p[0]}. ${p[1]} (${p[2]}) : ${p[3]}`);
});
console.log("-------------------------");
let students;
students = [
    ["1001", "jakrit", 20, 50, 0],
    ["1002", "Thanakit", 18, 42, 0],
    ["1003", "kongpop", 21, 49, 0],
    ["1004", "wasok", 15, 35, 0],
    ["1005", "taned", 17, 31, 0]
];
//ให้ update คะแนนรวม แสดงรหัส ชื่อ และคะแนนรวม
// แสดงเป็น
// ID: name, total:xx
students.forEach(p => {
    p[4] += p[2] + p[3];
    console.log(`${p[0]} : ${p[1]} Total : ${p[4]}`);
});
console.log("-------------------------");
var direction;
(function (direction) {
    direction[direction["Up"] = 1] = "Up";
    direction[direction["Down"] = 3] = "Down";
    direction[direction["Left"] = 5] = "Left";
    direction[direction["Right"] = 7] = "Right";
})(direction || (direction = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
console.log(direction.Left);
console.log(direction.Down);
console.log("-------------------------");
//สร้าง pdf 
// setpaper(size, orientation)
// 0:A3 1:A4 2:A5 3:A6
// 1:Portrait 0:Landscape
var PaperSize;
(function (PaperSize) {
    PaperSize[PaperSize["A3"] = 1] = "A3";
    PaperSize[PaperSize["A4"] = 2] = "A4";
    PaperSize[PaperSize["A5"] = 3] = "A5";
    PaperSize[PaperSize["A6"] = 4] = "A6";
})(PaperSize || (PaperSize = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Landscape"] = 2] = "Landscape";
})(Orientation || (Orientation = {}));
console.log(PaperSize);
// setPaperSize(PaperSize.A4, Orientation.Landscape)
console.log("-------------------------");
let wasok = {
    id: 101,
    name: "Wasok", tel: "097000"
};
console.log(wasok.id);
console.log(wasok.tel);
// let wasok: Student
// wasok.id = 101;
// wasok.name = "wasok";
// wasok.tel = "0977777777";
console.log("-------------------------");
//Type Assertion
let xx = false;
//ตั้งใจให้เป็น number
let xid;
xid = xx;
console.log(typeof (xid));
console.log(xid);
console.log("-------------------------");
console.clear();
//Union Type
let sid;
sid = 101;
console.log(typeof (sid));
sid = "555";
console.log(typeof (sid));
console.log("-------------------------");
//function
//addNumber จะ retrue type อะไรบ้าง
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(1, 3));
// console.log(addNumber(1,"3"))
function showLog(m) {
    console.log(m);
}
showLog(123);
showLog("456");
console.log("-------------------------");
const addNum = (x, y) => { return x + y; };
const subNum = (x, y) => x - y;
console.log(addNum(5, 7));
console.log(subNum(5, 7));
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
const boxer = {
    id: 106,
    name: "Jakrit",
    age: 19,
    move: function () {
        return "walk";
    },
    eat: function () {
        return "fried rice";
    }
}; // Jakrit
const pilot = {
    id: 102,
    name: "Kong",
    age: 29,
    move: function () {
        return "fly";
    },
    eat: function () {
        return "fried rice";
    }
};
// console.log(student.move())
// console.log(grandMom.move())
class Driver {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    move() {
        return `${this.name} move by driving`;
    }
    eat() {
        return `${this.name} eats rice`;
    }
}
console.clear();
const d1 = new Driver(101, "Jakrit", 20);
console.log(d1.move());
console.log(d1.eat());
// generic
function getArray(items) {
    return new Array().concat(items);
}
let n1 = [1, 2, 3, 4];
let n2 = ["a", "b", "c", "d"];
console.log(getArray([n1, n2]));
//Q1 ให้สร้าง tupleของนักเรียน id name mid final project grade
//output <id><name>
//Q2การบ้าน implement 1 อาชีพ จาก human
//แสดง move eat
//object
