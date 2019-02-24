function DragAndDrop (element) {

    this.dragElem = element;
    this.dragElem.addEventListener("mousedown", DragAndDrop.prototype.initDrag);
    this.obj = null;

}

DragAndDrop.prototype = {
    constructor : DragAndDrop,

    initDrag : function(event) {

        // Create a reference to the instance of the object.
        this.obj = this;

        // Change the style of the cursor when starting to move.
        this.obj.style.cursor.hover = "grab"; 

        var x = event.clientX;
        var y = event.clientY; 
        
        console.log(x + " " + y);

       // _this.removeEventListener("mousedown", this.initDrag)
        this.obj.addEventListener("mouseup", DragAndDrop.prototype.onDrop);

    },

    onDrag : function(event) {


        var x = event.clientX;
        var y = event.clientY; 

        this.dragElem.style.top = y + "px";
        this.dragElem.style.left = x + "px";

        console.log("test");

    }, 

    onDrop : function(event) {

        alert("test");

    }
};
    