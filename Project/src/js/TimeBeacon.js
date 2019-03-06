//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Static class
//--------------------------------------------------------------------------

/**
 * See if we can make this OOJS, several variables are used all the time
 */

 function TimeBeacon() {

        this.timer = false;
        
        this.digitArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

 }

 /* */

 TimeBeacon.prototype = {

        constructor : TimeBeacon,

        syncEvent : function () {

            this.timer = true;
            
            var that = this;
            // Get current time in milisecons and calculates duration for the timeout event.
            var time = new Date().getMilliseconds();
            var offset = 5;
            var timer = 1000 - time - offset;

            var currentTime = this.convertTime();

            // Creates a new event t
            let evt = new CustomEvent("sync", 
                {
                    detail : currentTime,
                    bubbles : true, 
                    cancelable : true
                });

            // Dispatch an event on the window DOM when the timer runs out.
            this.timer = true;

            window.setTimeout(function(){window.dispatchEvent(evt); that.syncEvent()}, timer);
        }, 

        convertTime : function () {

            var that = this;
            var time = new Date();

            var localTime = [
                time.getHours(),
                time.getMinutes(),
                time.getSeconds()
            ];
        
            // Loops through the time and extracts the digits
            localTime.forEach(function(element, index) {

                var firDigit = null;
                var secDigit = null;

                if (element < 10) {
                    firDigit = that.digitArray[0];
                    secDigit = that.digitArray[element];
                } else {
                    secDigit = that.digitArray[element % 10];
                    firDigit = that.digitArray[Math.floor(element / 10)];
                }

                localTime[index] = [firDigit, secDigit];

            });

            if (this.timer == false) {
                this.syncEvent();
            }

            return localTime;
        }, 

 };
