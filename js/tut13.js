console.log("welcome to tut13");
/*
you have to create a variable which is string containing the text which is a link .
===================================================================================
you have to fetch all the links forms a given page which contain this text.
*/

a=document.links;
Array.from(a).forEach(function(element){
    if(element.href.includes('java')){ //to seaarch javascript in thr html
console.log(element);
    }
else{
console.log("not present");
}
})
