/**
 * 
 */
function Point (coorX, coorY) {
    // variables
    this.x = coorX || 0;
    this.y = coorY || 0;
    // Functions
    this.reset = function () {
        this.x = 0;
        this.y = 0;
    };

    this.toString = function () {
        var string = ("Point[x: " + this.x + ", y: " + this.y + "]");
        return string;
    };
};