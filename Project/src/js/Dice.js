//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 * Creates the dice object and adds the methods to create, destroy and cast the
 * die. Accepts a parent parameter to determine where to append the object.
 * 
 * @param {*} parent 
 */
function Dice (parent) {

    this.dieParent = parent;

    this.die = null;
    this.face = null;
    this.dieClass = null;

    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------

    this.dieCreate();

}

Dice.prototype = {

    constructor : Dice,

    faceArray : ["one", "two", "three", "four", "five", "six"],

    /**
     * Creates the actual dice object with a random face value which determines the class
     * of the div object. Uses NewElem class to return a useable die that is appended to 
     * its parentclass. Also adds eventlistener to allow the die to be cast when clicked.
     */
    dieCreate : function() {

        var that = this;
        this.dieCast();

        this.die = NewElem.create(this.dieParent, "li", "class", this.dieClass);
        this.die.addEventListener("click", function() {that.dieCast()});

    },

    /**
     * Simulates a random die cast, if the die value has already been set it updates the 
     * die class atribute so the face changes to the correct value.
     */
    dieCast : function() {

        var pips = this.faceArray.length;

        this.face = Math.floor((Math.random() * pips) + 1);

        this.dieClass =  "dice dice-side-" + this.faceArray[this.face - 1];

        // If die object exists change it's class.
        if (this.die != null) {
            this.die.setAttribute("class", this.dieClass);
        }

    }, 

    /**
     * Removes the die from the parent element.
     */
    dieDestroy : function() {

        this.dieParent.removeChild(this.die); 

    }

};