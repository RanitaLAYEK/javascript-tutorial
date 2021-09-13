//type conversion  & type coercion

//console.log('welcome to tut5');
let myVar;
myVar=String (34);
//console.log(myVar, (typeof myVar));

//boolean to string convert
let booleanVar =String(true);
//console.log(booleanVar, (typeof booleanVar));

//let date=String(new Date());
//console.log(date,(typeof date));

let date=new Date();
//console.log(date);

let arr=String ([2,6,9,4,5]);
//console.log(arr.length, typeof (arr));
//object normal if we use string it will come as text.

var i=8;
//console.log(i.toString());

let numCon = Number("1234");
console.log(numCon, typeof numCon);

let stri=Number("3434");
stri=Number("3434d");
stri=Number(true);
stri=Number([1,2,3,4,6]);
console.log(stri,typeof stri);

let num=parseInt('23');
console.log(num,typeof num);

//Type coercion

let a=Number('10');
let b=20;

console.log(a+b);
