//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Static main
//--------------------------------------------------------------------------


var Main = {

    diceBtn : null,
    clockBtn : null,
    
    init : function() {
            Main.diceBtn = document.getElementById("icon-dice");
            Main.clockBtn = document.getElementById("icon-clock");

            Main.diceBtn.addEventListener("click", Main.newApplication);
            Main.clockBtn.addEventListener("click", Main.newClock);
        }, 

    newApplication : function() {
       var newApp = new Application();
       new DragAndDrop(newApp.windowWrapper, newApp.menuWrapper)
    },

    newClock : function() {
        var newClock = new Clock();
        new DragAndDrop(newClock.clockWrapper, newClock.menuWrapper)

    }
};
window.addEventListener("load", Main.init);