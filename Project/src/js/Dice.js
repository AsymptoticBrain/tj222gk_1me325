//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

function Dice (parent) {

    this.die_parent = parent;
    this.face = null;
    this.dieClass = null;
    this.die = null;

    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------

    this.die_create();

}

Dice.prototype = {

    constructor : Dice, 

    die_create : function() {

        this.die_cast();

        this.die = NewElem.create(this.die_parent, "li", "class", this.dieClass);

    },

    die_cast : function() {

        var faceArray = ["one", "two", "three", "four", "five", "six"];

        this.face = Math.floor((Math.random() * 6) + 1);

        this.dieClass =  "dice dice-side-" + faceArray[this.face - 1];

    }


}