//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Static class
//--------------------------------------------------------------------------

/**
 * 
 */
var TimeSync = {

    /**
     * 
     */
    create : function () {

        var event = new Event("timeSync", {"bubbles" : true});

        var time = new Date().getMilliseconds();

        var offset = 5;

        var ms = 1000 - time - offset;
            
        console.log("event created");
       window.setTimeout(function() {window.dispatchEvent(event)}, ms);
    
    }
    
};
