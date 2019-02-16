var Mouse = {
    x = 0,
    y = 0,

    coordinates : function (e) {
        Mouse.x = e.clientX;
        Mouse.y = e.clientY;
        
    }
};