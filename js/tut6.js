console.log('welcome to tut6 ');
const name = 'Ganesh';
const festival='chothurthi';

//to string concatinate this is one method
console.log(name +' '+ festival);

let html;
html = "<h1>this is header</h1>" +
"<p>this is paragraph</p>";

html = html.concat('this');
html = html.concat('this', 'str1');
//<h1>this is header</h1><p>this is paragraph</p>this -o/p
//console.log(html);
//console.log(html.length);
//console.log(html.toLocaleLowerCase());
//console.log(html.toUpperCase());

//Indexing
//-------------

//console.log(html[1]);
// console.log(html.indexOf ('this'));
// console.log(html.lastIndexOf ('>'));
// console.log(html.charAt('4'));
// console.log(html.endsWith('str1'));
// console.log(html.includes('is'));
// console.log(html.substring(0,4));
// console.log(html.slice(0,4));
// console.log(html.split(' '));
// console.log(html.replace('this','is'));


let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

            document.body.innerHTML = myHtml;
