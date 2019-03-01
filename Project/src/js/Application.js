//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 * Class resposible for creating the application window that runs the dice application.
 * Builds the DOM structure for the actual app and adds all necessary event listeners to 
 * the buttons to have a functioning app.
 */

function Application() {

    // Call on the drag and drop class for inheritance.
    DragAndDrop.call(this);

    // Array to store all the dice being cast during the game
    this.diceArray = [];
    
    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------
    this.init();
};

//----------------------------------------------------------------------
// Inherentence from drag and drop class.
//----------------------------------------------------------------------

Application.prototype = Object.create(DragAndDrop.prototype);
Application.prototype.constructor = Application;


//----------------------------------------------------------------------
// Prototype methods for Clock class.
//----------------------------------------------------------------------

    // Second bootstrap, starts the creation of app window.
    Application.prototype.init = function () {

        this.createObject();
        Application.prototype.dnd_init.call(this, this.windowWrapper, this.menuWrapper);
    };

    /**
     * Creates the actual structure of the app window through the use of DOM objects, calls
     * upon the NewElement class to reduce the amount of code. Also adds the needed event
     * listeners for all the buttons.
     */
    Application.prototype.createObject = function () {

        // Reference to the instance of the object.
        var that = this;

        // Reference to body element where the application is created.
        var contentWrapper  = document.getElementById("page-content-wrapper");
        
        // Window container for application.
        this.windowWrapper  = NewElem.create(contentWrapper, "div", "class", "dice-window-wrapper");

        // Window menu with close button.
        this.menuWrapper    = NewElem.create(this.windowWrapper, "div", "class", "dice-menubar-wrapper");
        this.closeBtn       = NewElem.create(this.menuWrapper, "div", "class", "close");

        // Window toolbar with dice controls.
        this.toolbarWrapper = NewElem.create(this.windowWrapper, "div", "class", "dice-toolbar-wrapper");
        this.toolbarUl      = NewElem.create(this.toolbarWrapper, "ul");
        this.addBtn         = NewElem.create(this.toolbarUl, "li", "class", "add");
        this.removeBtn      = NewElem.create(this.toolbarUl, "li", "class", "remove");
        this.rollBtn        = NewElem.create(this.toolbarUl, "li", "class", "roll");

        // Window counter for total of pips.
        this.counterLi      = NewElem.create(this.toolbarUl, "li");
        this.counterUl      = NewElem.create(this.counterLi, "ul", "class", "dice-toolbar-counter-wrapper");

        // Default counter value.
        for (let i = 0; i < 5; i++) {
            this.counterZero    = NewElem.create(this.counterUl, "li", "class", "zero");
        }

	    // Window for the content where the dice go.
	    this.content       = NewElem.create(this.windowWrapper, "div", "class", "dice-content-wrapper");
        this.contentUl     = NewElem.create(this.content, "ul");
        
        // Change the CSS position styles so the object will always be created at the same location.
        contentWrapper.style.position = "relative";
        this.windowWrapper.style.position = "absolute";
        
        //----------------------------------------------------------------------
        // Event listeners
        //----------------------------------------------------------------------

        // Allows you to close the current application.
        this.closeBtn.addEventListener("click", function () {
                that.windowWrapper.parentNode.removeChild(that.windowWrapper);});
        
        // Event listeners to add, remove or cast dice.
        this.addBtn.addEventListener("click", function() {that.addDie()});
        this.removeBtn.addEventListener("click", function(event) {that.destroyDie(event)});
        this.rollBtn.addEventListener("click", function(event) {that.rollDie(event)});

                
    }; 

    //----------------------------------------------------------------------
    // Dice control buttons.
    //----------------------------------------------------------------------

    /**
     * Creates a new die object and appends it to the playingfield, adds event listener
     * as to allow the update of the score counter should the individual die be recast.
     * Stores the object in an array for further functionality, after the creation of 
     * a die verify if the maximum amount of dice has been exceeded before updating the
     * score counter.
     */
    Application.prototype.addDie = function () {

        var die = new Dice(this.contentUl);
        var that = this;
        die.die.addEventListener("click", function() {that.updateCounter()})
        this.diceArray.push(die);
        
        var overflow = this.containment();
        if (overflow === false){
            this.updateCounter();
            // TODO: Check why the audiofile still plays even when overflow is true.
            this.playSound();
        };
    };

    /**
     * Removes the final die object from the diceArray and destroys it from the 
     * field before updating the score counter.
     */
    Application.prototype.destroyDie = function() {

        var die = this.diceArray.pop();
        if ( die != undefined) {
            die.dieDestroy();
            this.updateCounter();
            this.playSound();
        };
    };

    /**
     * Runs through the diceArray and recasts each die, afterwards update the
     * score counter.
     */
    Application.prototype.rollDie = function () {

        this.diceArray.forEach(die => {
            die.dieCast();
        });     
        this.updateCounter();
        this.playSound();
    }; 

    //----------------------------------------------------------------------
    // Counter.
    //----------------------------------------------------------------------

    /**
     * Updates the counter board by running through the array of all the dice objects and
     * adding their face values together. Loops through the counter digits and removes the
     * final digit from the total score each loop and updates that counter class value.
     */
    Application.prototype.updateCounter = function () {

        var counterArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        var score = 0;
        var maxCounters = this.counterUl.children.length;
        var counter = this.counterUl.lastChild;

        this.diceArray.forEach(die => {
            score += die.face;
        }); 

        for (let i = 0; i < maxCounters; i++) {
        
            // Get the last digit.
            var digit = score % 10;

            // Change the class of the counter and update local variables.
            counter.setAttribute("class", counterArray[digit]);
            counter = counter.previousSibling;            
            score = Math.floor(score/10);
        }

    };
    
    //----------------------------------------------------------------------
    // Help functions..
    //----------------------------------------------------------------------

    /**
     * Checks if the container is full by comparing the scroll height with the height of the
     * cointainer. If the the scroll height is larger that means an object was placed outside 
     * of the cointainer. When this happens the object is automatically destroyed and returns
     * true, in all other cases returns false.
     * 
     * @returns {Boolean}
     */
    Application.prototype.containment = function () {

        if (this.windowWrapper.scrollHeight > this.windowWrapper.clientHeight ) {
            this.destroyDie();
            return true;
        } else {
            return false;
        }

    },

    /**
     * Creates a new adio file that takes advantage of the html audiotag and plays the
     * selected soundfile.
     */
    Application.prototype.playSound = function () {

        var audio = new Audio('src/wav/add.wav');
        audio.play();
        audio = null;
    };
