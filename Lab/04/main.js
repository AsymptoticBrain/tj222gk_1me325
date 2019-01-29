// Main JS-file for Lab 04

var box;


// Init function

function init() {
    box = document.getElementById("box");

    document.addEventListener("mousemove", onMouseMove);
    box.addEventListener("click", onMouseClick);
}

 window.addEventListener("load", init)

 //------------------------------------------------------
 // Event functions
 //------------------------------------------------------

 function onMouseMove(e) {

    e.preventDefault();

    var x = e.clientX;
    var y = e.clientY;

    var heightHalf = (box.offsetHeight >> 1); // bitwise operator, pushes a zero into the front and drops out the last bit = Floor(box.offsetHeight/2)
    var widthHalf = (box.offsetWidth >> 1)

    box.style.top = y - heightHalf + "px";
    box.style.left = x - widthHalf + "px";

 }

 function onMouseClick(e) {

    box.style.width =  box.offsetWidth + 10 + "px";
    box.style.height = box.offsetHeight + 10 + "px";

    onMouseMove(e); // reposition sphere so center is under pointer

 }

 

