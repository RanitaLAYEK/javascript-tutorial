for(i=0;i<10;i++){
    console.log(i)
}

let j=0;
while(j<10){
    console.log(j);
    j++;
}
 
let k=0;
do{
 console.log(k+1);
 k++;
}while(k<10);

//how to use break & continue

let l=0;
do{
 console.log(l+1);
 if(l===5){
     break;
 }
 l++;
}while(l<10);

//Array define

let arr=[2,5,6,7]

for(i=0;i<arr.length;i++){
  let element = arr[i];
  console.log(element);
}

//Foreach

arr.forEach(function(element){
console.log(element)
})

let obj = {
    name:"telephone",
    status:"notActive",
    connect:'wire',
    age:3
}
    for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
    }