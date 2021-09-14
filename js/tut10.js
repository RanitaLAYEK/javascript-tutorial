console.log('welcome to tut10 function & scope');

// let name='Arijit';

// console.log(`Happy birthday ${name} Hope all your birthday wishes come true!` );

// let name1='Rimi';
// console.log(`Happy birthday ${name1} Hope all your birthday wishes come true!`);

//Function define & call

// function greet(name,thank){
//     console.log(`Happy birthday ${name} Hope all your birthday wishes come true! ${thank}`);
//     return 4;
// }


// let name='Arijit';
// let name1='Rim';

// greet(name,'Thank you');

// let value=greet(name,'Thank you');
// console.log(value);//o/p is undefined need to return value

//different syntax for function

const mygreet=function(name,thank='Thank you'){
    let msg=`Happy birthday ${name} Hope all your birthday wishes come true! ${thank}`;
    return msg;
}


let name='Arijit';
let name1='Rim';


let value= mygreet(name, 'Thank you');
console.log(value);

//different ways of return function

const myobj= {
    name: 'Ram',
    game: function(){
    return "FIFA";
}
}
console.log(myobj.game());

arr=['fruits','veg','animal'];

arr.forEach(function(element,index,array) {
    console.log(element,index,array)
});