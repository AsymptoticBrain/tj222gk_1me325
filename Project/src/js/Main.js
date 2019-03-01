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
    
    /**
     * Bootstrap function, adds eventlisteners to the buttons in the menubar to allow
     * the creation of application and clock objects.
     */
    init : function() {
            Main.diceBtn = document.getElementById("icon-dice");
            Main.clockBtn = document.getElementById("icon-clock");

            Main.diceBtn.addEventListener("click", Main.newApplication);
            Main.clockBtn.addEventListener("click", function() {new Clock();});
        }, 

    // Creates new application window.
    newApplication : function() {
       var newApp = new Application();
       new DragAndDrop(newApp.windowWrapper, newApp.menuWrapper)
    },

    
};
//----------------------------------------------------------------------
// Bootstrap
//----------------------------------------------------------------------

window.addEventListener("load", Main.init);