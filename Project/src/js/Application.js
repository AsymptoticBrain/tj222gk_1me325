//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

function Application() {
    this.init();

    this.appWindow = null;

    this.diceArray = [];

}

Application.prototype = {
    constructor : Application,

    init : function () {
        this.createObject();
    },

    createObject : function () {

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
        
        //----------------------------------------------------------------------
        // Event listeners
        //----------------------------------------------------------------------
        this.closeBtn.addEventListener("click", function () {
                that.windowWrapper.parentNode.removeChild(that.windowWrapper); });
        

        this.addBtn.addEventListener("click", function() {that.addDie()});
        this.removeBtn.addEventListener("click", function(event) {that.destroyDie(event)});
        this.rollBtn.addEventListener("click", function(event) {that.rollDie(event)});

                
    }, 

    //----------------------------------------------------------------------
    // Dice control buttons.
    //----------------------------------------------------------------------
    addDie : function () {

        var die = new Dice(this.contentUl);
        var that = this;
        die.die.addEventListener("click", function() {that.updateCounter()})
        this.diceArray.push(die);
        
        var overflow = this.containment();
        if (overflow == false){
            this.updateCounter();
            this.playSound();
        };
    },

    destroyDie : function(event) {

        var die = this.diceArray.pop();
        if ( die != undefined) {
            die.dieDestroy();
            this.updateCounter();
            this.playSound();
        }
    },

    rollDie : function (event) {

        this.diceArray.forEach(die => {
            die.dieCast();
        });     
        this.updateCounter();
        this.playSound();
    }, 

    //----------------------------------------------------------------------
    // Counter.
    //----------------------------------------------------------------------

    /**
     * Updates the counter board by running through the array of all the dice objects and
     * adding their face values together. Loops through the counter digits and removes the
     * final digit from the total score each loop and updates that counter class value.
     */
    updateCounter : function () {

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

    },
    
    /**
     * Checks if the container is full by comparing the scroll height with the height of the
     * cointainer. If the the scroll height is larger that means an object was placed outside 
     * of the cointainer. When this happens the object is automatically destroyed and returns
     * true, in all other cases returns false.
     * 
     * @returns {Boolean}
     */
    containment : function () {

        if (this.windowWrapper.scrollHeight > this.windowWrapper.clientHeight ) {
            this.destroyDie();
            return true;
        } else {
            return false;
        }

    },

    playSound : function () {

        var audio = new Audio('src/wav/add.wav');
        audio.play();
        audio = null;
    }
};