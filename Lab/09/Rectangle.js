/**
 * 
 */
function Rectangle (coorX, coorY, width, height) {

    Point.call(this, coorX, coorY);
    this.width = width || 0;
    this.height = height || 0;

}

Rectangle.prototype = Object.create(Point.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.reset = function() {
            Point.prototype.reset.call(this);
            this.width = 0;
            this.height = 0;
};

Rectangle.prototype.toString = function () {

    var string = ("Rectangle[x: " + this.x + ", y: " + this.y +
        ", width: " + this.width + ", height: " + this.height + "]");
    return string;

};