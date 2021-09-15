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
console.log(sell);