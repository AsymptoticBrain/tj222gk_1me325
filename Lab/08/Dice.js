/**
 * Dice class, creates a dice object
 */
function Dice () {
    this.value = 1;
}

Dice.prototype = {
    constructor : Dice, 
    roll : function () {
        this.value = Math.floor((Math.random() * 6) + 1);
    }
};