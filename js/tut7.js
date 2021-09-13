console.log('welcometo tut7 & discuss array');

const fruits = ['orange','apple','sapota','mango'];
let marks = [89,8,9,7,6];
const mixer = ['str1',[5,6,7]];

let arr = new Array(20,15,59,46);
console.log(arr);
console.log(fruits);
console.log(marks);
console.log(mixer);
console.log(fruits[2]);

console.log(arr.length);
console.log(Array.isArray('abcd'));

//how to concat array value

arr[2]='krisna';
console.log(arr);

//method index of

let mark2 =marks.indexOf (9);
console.log(mark2);

//Mutating or modifying
marks.push(24);
console.log(marks);

marks.unshift(10);
console.log(marks);

marks.pop(20);
console.log(marks);

marks.shift(56);
console.log(marks);

marks.splice(2,3);
console.log(marks);

marks.reverse();
console.log(marks);

let mark3=[2,6,7,9];
marks=marks.concat(mark3);
console.log(marks)

let myobj= {
name:'Durga',
channel :'TVF',
status : 'Active',
marks4 :[1,2,3,4,8]
}

console.log(myobj);
//methods to get object element
//console.log(myobj.name);
console.log(myobj['status']);
