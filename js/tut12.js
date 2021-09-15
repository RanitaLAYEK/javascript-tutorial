console.log("welcome to tut12");

let a=document;
// console.log(a);

a=document.all;
// console.log(a);

// a=document.body;
// console.log(a);

// a=document.forms[0];
// console.log(a);

//we cant use array.forEach

/*Array.from(a).forEach(function(element){
console.log(element);
}) */

//how to goto another page link
a=document.links;
console.log(a);

//use document.images& docuemnt.script,print the list of images & script on a html page.

a=document.images;
Array.from(a).forEach(function(element){
console.log(element);
})

a=document.scripts;
Array.from(a).forEach(function(element){
    console.log(element);
})
