//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 * 
 */

function Clock() {

    
    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------
    this.init();
}

Clock.prototype = {
    constructor : Clock,

    // Second bootstrap, starts the creation of app window.
    init : function () {
        this.createClock();
    },

    /**
     * 
     */
    createClock : function () {

        // Reference to the instance of the object.
        var that = this;

        // Reference to body element where the application is created.
        var contentWrapper  = document.getElementById("page-content-wrapper");
        
        // Window container for application.
        this.clockWrapper  = NewElem.create(contentWrapper, "div", "class", "clock-window-wrapper");

        // Window menu with close button.
        this.menuWrapper    = NewElem.create(this.clockWrapper, "div", "class", "clock-menubar-wrapper");
        this.closeBtn       = NewElem.create(this.menuWrapper, "div", "class", "close");

        // Window toolbar with dice controls.
        this.clockContent   = NewElem.create(this.clockWrapper, "div", "class", "clock-content-wrapper");

        // Hour digits.
        this.hourWrapper    = NewElem.create(this.clockContent, "ul", "class", "clock-digit-wrapper hour");
        for (let i = 0; i < 2; i++) {
            this.hourDigit  = NewElem.create(this.hourWrapper, "li", "class", "clock-digit-one");
        }

        // Minute digits.
        this.minuteWrapper  = NewElem.create(this.clockContent, "ul", "class", "clock-digit-wrapper hour");
        for (let i = 0; i < 2; i++) {
            this.hourDigit  = NewElem.create(this.minuteWrapper, "li", "class", "clock-digit-one");
        }

        // Seconds digits.
        this.secondWrapper  = NewElem.create(this.clockContent, "ul", "class", "clock-digit-wrapper second");
        for (let i = 0; i < 2; i++) {
            this.hourDigit  = NewElem.create(this.secondWrapper, "li", "class", "clock-digit-one");
        }

        // Change the CSS position styles so the object will always be created at the same location.
        contentWrapper.style.position = "relative";
        this.clockWrapper.style.position = "absolute";
        
        //----------------------------------------------------------------------
        // Event listeners
        //----------------------------------------------------------------------

        // Allows you to close the current application.
        this.closeBtn.addEventListener("click", function () {
                that.clockWrapper.parentNode.removeChild(that.clockWrapper);});
                
    }
    
};