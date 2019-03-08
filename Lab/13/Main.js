//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Static main
//--------------------------------------------------------------------------

var Main = {
    canvas : null,
    context : null,

    init : function() {

        Main.initCanvas();
        Main.initContext();
        Main.initBackground();
    },

    initCanvas : function() {
        Main.canvas = document.createElement("canvas");
        Main.canvas.setAttribute("width", "800px");
        Main.canvas.setAttribute("height", "600px)");
        document.body.appendChild(Main.canvas);
     }, 

     initContext : function() {
        Main.context = Main.canvas.getContext("2d");
     },

     initBackground : function() {
        Main.context.fillStyle = "yellow";
        Main.context.strokeStyle = "red";
        Main.context.fillRect(0, 0, Main.canvas.width, Main.canvas.height);
        Main.context.strokeRect(0,0,Main.canvas.width, Main.canvas.height)
     }
 
 } 
 window.addEventListener("load", Main.init)