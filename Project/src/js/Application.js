function Application() {
    this.init();

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
    // Functions for the dice button controls.
    //----------------------------------------------------------------------
    addDie : function () {

        var die = new Dice(this.contentUl);

        this.diceArray.push(die);
    },

    destroyDie : function(event) {

        var die = this.diceArray.pop();

        if ( die != undefined) {
            die.dieDestroy();
        }
    },

    rollDie : function (event) {

        this.diceArray.forEach(die => {
            die.dieCast();

        });       
    }, 

    containment : function () {
        
    }
};