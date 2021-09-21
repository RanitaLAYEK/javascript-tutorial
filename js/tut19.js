console.log('welcome to tut19');

let a="prince";
let links=document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(a)){
        console.log(href);
    }
});

// let str = "python";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element) {
//   href = element.href;
//   if (href.includes(str)) {
//     console.log(href);
//   }
// });
