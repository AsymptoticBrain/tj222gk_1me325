//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

function Dice (parent) {

    this.dieParent = parent;
    this.face = null;
    this.dieClass = null;
    this.die = null;

    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------

    this.dieCreate();

}

Dice.prototype = {

    constructor : Dice, 

    dieCreate : function() {

        this.dieCast();

        this.die = NewElem.create(this.dieParent, "li", "class", this.dieClass);

    },

    dieCast : function() {

        var faceArray = ["one", "two", "three", "four", "five", "six"];

        this.face = Math.floor((Math.random() * 6) + 1);

        this.dieClass =  "dice dice-side-" + faceArray[this.face - 1];

        // If die object exists change it's class.
        if (this.die != null) {
            this.die.setAttribute("class", this.dieClass);
        }

    }, 

    dieDestroy : function() {

        this.dieParent.removeChild(this.die); 

    }

};