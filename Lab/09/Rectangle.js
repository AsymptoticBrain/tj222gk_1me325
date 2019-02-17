/**
 * 
 */
function Rectangle (coorX, coorY, width, height) {

    Point.call(this, coorX, coorY);
    this.width = width || 0;
    this.height = height || 0;

    this.tostring = function () {
        var string = ("Rectangle[x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]");
        return string;
    };

};

Rectangle.prototype = Object.create(Point.prototype);
Rectangle.prototype.constructor = Rectangle;