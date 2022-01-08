// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let marks=[79,70,80, 92, 84];
const fruits=['apple','mango','orange'];
mix=[86,'sin',[92,'cos']];
console.log(marks);
console.log(fruits);
console.log(mix);

arr = new Array('a','b','c');
console.log(arr);
console.log(marks[2]);
console.log(marks.length);
console.log(Array.isArray(marks));
marks[0]=100;
console.log(marks);
let arrelem=marks[0];
console.log("element : ",arrelem);

let value = marks.indexOf(92);
console.log(value);
let value1 = marks.indexOf(192);
console.log(value1);

marks.push(100);
marks.push(200);
marks.unshift(1000);
marks.unshift(2000);
console.log(marks);
marks.pop();
marks.shift();
console.log(marks);
marks.splice(1,2);
console.log(marks);
marks.reverse();
console.log(marks);
let marks2=[200,201,202];
marks=marks.concat(marks2);
console.log(marks);


let myobj={
    name:'pratik',
    'profession':'student',
    marks:[100,92,99]
}

console.log(myobj);
console.log(myobj.name);
console.log(myobj['profession']);
console.log(myobj.marks);
