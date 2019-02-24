function Application() {
    this.init();

}

Application.prototype = {
    constructor : Application,
/*
    
    <div class="dice-content-wrapper">
    
        <ul>
        
            <li class="dice dice-side-one"></li>
            <li class="dice dice-side-two"></li>
            <li class="dice dice-side-three"></li>
            <li class="dice dice-side-four"></li>
            <li class="dice dice-side-five"></li>
            <li class="dice dice-side-six"></li>
        
        </ul>
    
    </div>

</div>

</div>
*/

    init : function () {
        this.createObject(); 
    },

    createObject : function () {

        // Reference to the instance of the object.
        var _this = this;

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
        
        // Add eventlisteners
        this.closeBtn.addEventListener("click", function () {
                _this.windowWrapper.parentNode.removeChild(_this.windowWrapper); });
                
    }
};