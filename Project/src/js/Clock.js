//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 * Creates a clock object which takes the local time and updates the time dynamically
 * through the use of an interval timer.
 */

function Clock() {

    // Call on the drag and drop class for inheritance.
    DragAndDrop.call(this);
    
    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------
    this.init();
}

//----------------------------------------------------------------------
// Inherentence from drag and drop class.
//----------------------------------------------------------------------

Clock.prototype = Object.create(DragAndDrop.prototype);
Clock.prototype.constructor = Clock;


//----------------------------------------------------------------------
// Prototype methods for Clock class.
//----------------------------------------------------------------------

    // Second bootstrap, starts the creation of app window.
    Clock.prototype.init = function () {
    
        this.createClock();
        this.getTime();
        Clock.prototype.dnd_init.call(this, this.clockWrapper, this.menuWrapper);
    };

    /**
     * Creates the actual DOM structure of the clock, calls the NewElem class to reduce the code 
     * when creating the DOM elements. Also adds the eventlistener to allowing closing the object.
     */
    Clock.prototype.createClock = function () {

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
        
        this.counterArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        this.clockCounter = [this.hourWrapper, this.minuteWrapper, this.secondWrapper];
        //----------------------------------------------------------------------
        // Event listeners and timer.
        //----------------------------------------------------------------------

        // Allows you to close the current application.
        this.closeBtn.addEventListener("click", function () {
                that.clockWrapper.parentNode.removeChild(that.clockWrapper);});

        // Update time at regular intervals, 100 ms keeps the different clocks synced.
        window.setInterval(function(){that.getTime()}, 100)
                
    };

    /**
     * Extracts the local time from the users system using the Date class and then updates the 
     * class attribute of each counter of the clock, changing it to the correct number. 
     */
    Clock.prototype.getTime = function () {

        var time = new Date();
        var that = this;

        var localTime = [
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        ];
        
        // Loops through the time and extracts the digits
        localTime.forEach(function(element, index) { 
            if (element < 10) {
                localTime[index] = [0, element];
            } else {
                let secDigit = element % 10;
                let firDigit = Math.floor(element / 10) 
                localTime[index] = [firDigit, secDigit];
            }
        });

        // Runs through the time array and changes the class attribute to show the right digit.
        this.clockCounter.forEach(function(element, index) {

            var timeCounter = localTime[index]

            for ( let i = 0; i < 2; i++) {
                var CSSindex = timeCounter[i];
                element.childNodes[i].setAttribute("class", "clock-digit-" + that.counterArray[CSSindex]);
            }
            
        });

    };

