/**
 * 
 */
function Rectangle (coorX, coorY, width, height) {

    Point.call(this, coorX, coorY);
    this.width = width || 0;
    this.height = height || 0;

    this.reset = function () {
        Rectangle.prototype.reset.call(this);
        this.width = 0;
        this.height = 0;
    };

    this.toString = function () {
        var string = ("Rectangle[x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]");
        return string;
    };

};

Rectangle.prototype = new Point();
Rectangle.prototype.constructor = Rectangle;