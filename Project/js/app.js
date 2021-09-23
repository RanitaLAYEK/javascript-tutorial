console.log('Welcome to Project1');


/*
if user add a note add it to the local storage

*/

let btn=document.getElementById("addbtn");
addbtn.addeventlistner('click',function(e)
{
    let addTxt=document.getElementById('addTxt');
    let notesElement=localStorage.getItem('notes');
    if(notes==null){//to check if any notes are present in local storage
        notesObj=[];
    }
})