console.log('welcome to tut8');
// let age = 45;
// if(age==25){
//     console.log('you are old')
// }
// else if(age==55){
//     console.log('Age more than 45')
// }
// else{
//     console.log('you are a kid ')
// }

//ex--if any user is giving wrong userid we should give alert*

let car = 'maruti';
if(car=='maru'){
    console.log('This car is Maruti')
}
else if(car===80){
    console.log('this is porcha')
}
else{
    console.log('this is alto')
}
//== signifies match between the value,=== signifies match between value & type 
//!= not eqaul to !== value & type are not matching

// let age = 65;
// if(age!=20){
//     console.log('Age is not 20')
// }
// else if(age===65){
//    console.log('Age is 65')
// }
// else{
//     console.log('Age is just a number ')
// }


let age1 = '65';
if(age1!=20){
    console.log('Age is not 20')
}
if(age1!==45){ //
   console.log('Age is not 65')
}
else{
    console.log('Age is just a number ')
}

//how to check undefined variable

let a=30;

if(a){
    console.log('A for Apple')
}
else{
    console.log('you are welcome')
}

//let b = 49;
if(typeof b!==2 ){
console.log('b is defined')
}
else{
    console.log('b is undefined')
}

let driveCar = true;
let age=10;
if(driveCar && age>21){
    console.log('you can drive')
}
else{
 console.log('you cant drive')
}

//||==or operator

//if(driveCar || age>21) -- if 1 condition is true then it will work

//Ternary operator ?:

console.log(age==20? 'Age is 10':'Age is not 10');

//SWITCH CASE

switch(age){
    case 12:
      console.log('you are 12');
      break;
      case 32:
      console.log('you are 32');
      break;
      case 52:
      console.log('you are 52');
      break;
      case 62:
      console.log('you are 62');
      break;
      default:
      console.log('you are above 60');
      break;
}
