/**
 * 
 */
function Point (coorX, coorY) {
    this.x = coorX || 0;
    this.y = coorY || 0;
}

Point.prototype = {
    constructor : Point,

    reset : function () {
        this.x = 0;
        this.y = 0;
    },

    toString : function () {
        var string = ("Point[x: " + this.x + ", y: " + this.y + "]");
        return string;
    }

};