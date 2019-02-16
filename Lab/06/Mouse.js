var Mouse = {
    x : 0,
    y : 0,

    coordinates : function (e) {
        Mouse.x = e.clientX;
        Mouse.y = e.clientY;
        
        console.log("x = " + Mouse.x + " , y = " + Mouse.y);
    },

    init : function (e) {
        document.onmousemove = Mouse.coordinates;
    }
};

window.addEventListener("load", Mouse.init)