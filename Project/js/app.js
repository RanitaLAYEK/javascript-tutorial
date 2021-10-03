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
addBtn.addEventListener("click", function (e) {
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

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div> `;
    });

    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = "nothing to show!!!!  :)"
    }

}

//funtion to delete a note

function deleteNote(index){
    console.log('i am deleting !!!',index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1); 
    localStorage.setItem("notes", JSON.stringify(notesObj)); 
    shownotes(); 

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 