console.log('this is 20');

//LOCAL STORAGE

localStorage.setItem('Name','Rit');
localStorage.setItem('Name2','prachi');

let name= localStorage.getItem('Name');
console.log(name);

//to clear local storage

//localstorage.clear;

//clear a particular key
localStorage.removeItem('Name');

//Array adding

let impArray = ['adrak', 'pyaz', 'bhindi'];

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
