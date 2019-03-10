//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public Class
//--------------------------------------------------------------------------

/**
 * Creates an object that serves as a time beacon, sends out the current time to all objects that
 * have a listener attached, either as a string or as integers. Takes two parameters the duration 
 * of the timer in miliseconds, default is 1 second and the format of the returned time.
 * 
 * @param {*} duration 
 * @param {*} format 
 */
 function TimeBeacon(duration, format) {

        this.pulse = duration || 1000;
        this.format = format || string;

        this.timerArray = [];
        this.digitArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

 }

 /* */

 TimeBeacon.prototype = {

        constructor : TimeBeacon,

        //--------------------------------------------------------------------------
        // Public Methods
        //--------------------------------------------------------------------------


        /**
         * Adds an event listener to the DOM element provided as anchor and a handler function
         * which triggers when the timer runs out. When the listener is added the event is 
         * immediately triggered and after that at each interval.
         * 
         * @param {*} anchor 
         * @param {*} handler 
         */
        addListener : function (anchor, handler) {

            if (anchor != undefined && typeof handler === "function") {

                // Adds an eventlistener and put a reference into the timerArray.
                anchor.addEventListener("sync", handler);
                this.timerArray.push(anchor);
                this._createEvent(anchor);

                // Start the periodic events when one element is in the array to prevent multiple timers.
                if (this.timerArray.length == 1) {

                    this._timePulse();

                }

            } else {

                console.log("addListener error : Undefined div-element or handler is not a function.")

            }

        },

        /**
         * Removes the event listener from the DOM element.
         * 
         * @param {*} anchor 
         * @param {*} handler 
         */
        removeListener : function (anchor, handler) {

            if (anchor != undefined && typeof handler === "function") {

                for (let i = 0; i < this.timerArray.length; i++) {                  
                    
                    if ( anchor === this.timerArray[i]) {

                        // Removes the eventlistener and removes the reference from the timerArray.
                        this.timerArray[i].removeEventListener("sync", handler);
                        this.timerArray.splice(i,1);

                    }
                }

            } else {

                console.log("removeListener error : Undefined div-element or handler is not a function.")

            }

        },

        //--------------------------------------------------------------------------
        // Private Methods
        //--------------------------------------------------------------------------


        /**
         * Creates a timeOut that will launch after a certain amount of time, checks the current
         * time in miliseconds to fire the event as accurately as possible.
         */
        _timePulse : function () {

            if (this.timerArray.length > 0 && this.pulse > 10) {

                var that = this;
            
                // Get current time in milisecons and calculates duration for the timeout event.
                var time = new Date().getMilliseconds();
                var timer = this.pulse - time;

                window.setTimeout(function(){that._syncArray()}, timer);
            }
        },

        /**
         * Loops through the array with all the elements that have an eventlistener attached and
         * dispatches an event to them, providing them with the current time.
         */
        _syncArray : function () {

            if (this.timerArray.length > 0) {

                var evt = this._createEvent();

                for (let i = 0; i < this.timerArray.length; i++) {

                    this.timerArray[i].dispatchEvent(evt);

                }

                this._timePulse();
            
            }
        },

        /**
         * Creates the actual event that will be dispatched, sends with it the current time.
         */
        _createEvent : function (anchor) {

            if (this.timerArray.length > 0) {

                var currentTime = this._convertTime();

                let evt = new CustomEvent("sync", 
                {
                    detail : currentTime
                });

                if (anchor != undefined) {

                    anchor.dispatchEvent(evt);

                } else {

                    return evt

                }
            }
        },

        /**
         * Checks the current time and coverst the numbers to a string by default or as 
         * digits if an argument was provided.
         */
        _convertTime : function () {

            var that = this;
            var time = new Date();

            var localTime = [
                time.getHours(),
                time.getMinutes(),
                time.getSeconds()
            ];
        
            if (this.format == string) {
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

                return localTime;

            } else if (this.format == integer) {

                return localTime;

            } else {

                console.log("format error: Wrong format provided, only string or integer are vallid arguments.")

            }
        },    
 };
