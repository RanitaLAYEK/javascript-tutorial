console.log('welcome to tut15');

let count=document.querySelector('.no');
count=document.querySelector('.container');
console.log(count);
console.log(count.childNodes);//wont consider the comment or new lines
console.log(count.children);//when deal with any website.working with elements

let nodeName=count.childNodes[1].nodeName;
let nodeType=count.childNodes[0].nodeType;

console.log(nodeName);
console.log(nodeType);

/*
1 :: Element
2 :: Attribute
3 :: Text
8 :: Comment
9 :: Document
10:: Document Type
11:: Document fragment Node

*/
let container=document.querySelector('div.container');
console.log(container.children[1].children[0].children);

console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.childElementCount);//count of child element
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);