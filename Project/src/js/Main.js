//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Static main
//--------------------------------------------------------------------------


var Main = {

        diceBtn: null,
        clockBtn: null,
        synctime: null,

        /**
         * Bootstrap function, adds eventlisteners to the buttons in the menubar to allow
         * the creation of application and clock objects.
         */
        init: function () {
                Main.diceBtn = document.getElementById("icon-dice");
                Main.clockBtn = document.getElementById("icon-clock");

                Main.diceBtn.addEventListener("click", function () { new Application(); });
                Main.clockBtn.addEventListener("click", function () { new Clock(); });

                Main.synctime = new TimeBeacon();


        },

};
//----------------------------------------------------------------------
// Bootstrap
//----------------------------------------------------------------------

window.addEventListener("load", Main.init);