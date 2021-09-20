console.log('welcome to tut17');

//element grab & event fire.

document.getElementById('heading').addEventListener('click', function (a) {
    let b;
    console.log('you are clicking in heading');
    console.log(a);
    b = a.target;
    b = a.target.classList;
    b = a.target.className;
    b = e.offsetX;
    b = e.offsetY;
    b = e.clientX;
    b = e.clientY;
    console.log(b);


    // location.href='//google.com';//after clicking event redirect to different page.
})

//offsetx,offsety,clentx,clienty

/*onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page*/