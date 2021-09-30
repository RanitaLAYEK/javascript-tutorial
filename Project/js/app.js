console.log('Welcome to Project1');


/*
if user add a note add it to the local storage

*/

// let addBtn=document.getElementById("addBtn");
// addBtn.addEventlistner("click",function(e)
// {
//     let addTxt=document.getElementById('addTxt');
//     let notes=localStorage.getItem("notes");
//     if(notes==null){//to check if any notes are present in local storage
//         notesObj=[];
//     }
//     else{
//         notesObj=JSON.parse(notes);
//     }
//     notesObj.push(addTxt.value);
//     localstorage.setItem("notes",JSON.stringify(notesObj));
//     addTxt.value="";
//     console.log(notesObj);
// })


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
console.log(notesObj);
shownotes();
})

function shownotes(){
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      let Html='';
      Array.forEach(function(element,index){

      });
}
