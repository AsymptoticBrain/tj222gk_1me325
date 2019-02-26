//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------


function DragAndDrop (element, anchor) {

    // Internal reference to element that we want to drag.
    this.dnd_element = element || null;

    // Internal reference to element that enables the drag-and-drop functionality.
    this.dnd_anchor = anchor || this.dnd_element;

    // Internal reference to position of the object.
    this.dnd_origin = {
        x : 0,
        y : 0
    };

    // Internal reference to the offset bewteen object and mousepointer.
    this.dnd_offset = {
        x : 0,
        y : 0
    };

    // Draggable or not.
    this.dnd_active = false;

    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------

    this.dnd_init();

}

DragAndDrop.prototype = {

    constructor : DragAndDrop,

    // Initializes the instance and adds the needed eventlisteners.
    dnd_init : function() {
        var that = this;

        // Event listeners for the anchor
        this.dnd_anchor.addEventListener("mousedown", function(event) {that.dnd_startDrag(event)});
        this.dnd_anchor.addEventListener("mouseup", function(event) {that.dnd_stopDrag(event)});

        // Event listeners for the window allowing dragging inside the whole window and register mouseup event 
        // outside the actual window.
        window.addEventListener("mousemove", function(event) {that.dnd_onDrag(event)});
        window.addEventListener("mouseup", function(event) {that.dnd_outOfBounds(event)});
    

        // Change the style of the cursor indicating that it cab be grabbed.
        this.dnd_anchor.style.cursor = "grab"; 

    },

    dnd_startDrag : function(event) {

        // Stop default behaviour in the browser.
        event.preventDefault();

        // Update the draggable flag to true and changes opacity and z index of the draggable object.
        this.dnd_active = true;
        this.dnd_anchor.style.cursor = "grabbing";
        this.dnd_element.style.cursor = "grabbing";
        this.dnd_element.style.opacity = 0.7;
        this.dnd_element.style.zIndex = Math.floor(new Date().getTime()/1000);

        // Get position of draggable element and the offset of the cursor.
        this.dnd_origin.x = event.clientX;
	    this.dnd_origin.y = event.clientY;
	    this.dnd_offset.x = parseInt(this.dnd_element.style.left) || 0;
        this.dnd_offset.y = parseInt(this.dnd_element.style.top)  || 0;

    },

    dnd_onDrag : function(event) {
        if (this.dnd_active === true) {
            var position = {
                x : event.clientX - (this.dnd_origin.x - this.dnd_offset.x),
                y : event.clientY - (this.dnd_origin.y - this.dnd_offset.y)
            };

            
            this.dnd_element.style.left = position.x + "px";
            this.dnd_element.style.top = position.y + "px";

        };
    }, 

    dnd_stopDrag : function(event) {
        // Stop default behaviour in the browser.
        event.preventDefault();

        this.dnd_active = false;

        this.dnd_element.style.opacity = 1.0;
        this.dnd_anchor.style.cursor = "grab";
        this.dnd_element.style.cursor = "auto";

    },

    /**
     * Function trying to simulate some boundary conditions, if mouseup is activated
     * check if the draggable element was left outside the winow and reset its position
     * to the closest possible x and y coordinates.
     * 
     * @param {*} event 
     */
    dnd_outOfBounds : function (event) { 

        if (this.dnd_active === true) {
            if (event.clientX < 0 ) {
                this.dnd_element.style.left = 0 + "px";
            }
            if (event.clientY < 0) {
                this.dnd_element.style.top = 0 + "px";
            }
            
            this.dnd_stopDrag(event);
        }

    }
    
};
    