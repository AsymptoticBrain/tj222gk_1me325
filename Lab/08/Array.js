/**
 * Helpfunction to remove all occerences of a certain value
 */
Array.prototype.removeAllof = function(property, value) {
    newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (this[i][property] !== value) {
            newArray.push(this[i]);
        }
    }
    
    return newArray;
};