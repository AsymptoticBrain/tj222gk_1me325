//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public Class
//--------------------------------------------------------------------------

/**
 * Creates an object that serves as a time beacon, sends out the current time in the form of 
 * a string coupled to an event. The event is launched as close as possible when the time 
 * turns over a second and there are 0 milliseconds on the clock. Allows for syncing of multiple
 * clocks.
 */

 function TimeBeacon() {

        this.timer = false;
        this.beacon = null;
        
        this.digitArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

 }

 /* */

 TimeBeacon.prototype = {

        constructor : TimeBeacon,

        /**
         * Gets current milliseconds and calcuates the time for when the custom event is fired.
         */
        syncEvent : function () {

            this.timer = true;

            var that = this;

            // Get current time in milisecons and calculates duration for the timeout event.
            var time = new Date().getMilliseconds();
            var timer = 1000 - time;

            var currentTime = this.convertTime();

            // Creates a new event.
            let evt = new CustomEvent("sync", 
                {
                    detail : currentTime,
                    bubbles : true, 
                    cancelable : true
                });

            // Dispatch an event on the window DOM when the timer runs out.
            this.timer = true;

            this.beacon = window.setTimeout(function(){window.dispatchEvent(evt); that.syncEvent()}, timer);
        }, 

        /**
         * Checks the current time and coverst the numbers to english strings.
         */
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

            // If timer is false then no timeout event is running, calls syncEVent to start.
            if (this.timer == false) {
                this.syncEvent();
            }

            return localTime;
        }, 

        /**
         * Checks the document if any elements are still left that use the event, if not cancel the loop.
         * @param {*} element 
         */
        checkListener : function (element) {

            var elem = document.getElementsByClassName(element);

            if (elem.length <= 1 ) {
                clearTimeout(this.beacon);
                this.timer = false;
            };

        }

 };
