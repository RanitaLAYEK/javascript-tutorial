console.log("welcome to tut14");
/*
single selector
multi selector
element.style.background
*/

let car=document.getElementById('myfirst');
//  console.log(car);
// car=car.className;
// car=car.childNodes;
// car=car.parentNode;

car.style.color='red';
car.innerText='You are welcome';
car.innerHTML='<b>Welcome to new episode</b>'
// console.log(car);

//QUERYSELECTOR.
let sell=document.querySelector('#myfirst');
sell=document.querySelector('.child');
sell=document.querySelector('b'); //b tag is o/p
console.log(sell);
//Multi queryselector
let buy=document.getElementsByClassName('child');
console.log(buy[0]);

//HTML COLLECTION ALTERATE
Array.from(buy).forEach(element =>{
    console.log(buy);
    element.style.color='blue';
    });