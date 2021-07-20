console.log('tut3');
//variables on js
//var,let,const
var name = 'Ranita';
console.log(name);
var channel ='code with me';
var marks = 34;
console.log(name,channel,marks);

/*Rules for javascript variables

1.cannot start with number like '12ranita';
2.Names can contain letters, digits, underscores, and dollar signs.
3.case sensitive
4. Reserved words (like JavaScript keywords) cannot be used as names


*/

var city = 'Asansol';
console.log(city);

const ownerName = 'something';
//others programmer cant use your same variable name.
//ownerName = 'haha'; cant do this.
console.log(ownerName);
const fruit = 'Mango';
console.log(fruit);

//LET is block level

{
    let city = 'Hyderabad';
    city ='kolkata';
    console.log(city);
}

console.log(city);

/*if we do like below 
//let city = 'Hyderabad';
    city ='kolkata';
    console.log(city);
    then the o/p will be kolkata bcz then its  a global variable.
    */

const arr1 = [20,3,50,6,7];
arr1.push(45);
console.log(arr1);

/*MOST COMMON PROGRAMMING CASE TYPES***************************

1.cammelCase:---
2.kebbab-case:---

fomat check



*/