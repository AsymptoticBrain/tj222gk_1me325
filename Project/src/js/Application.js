function Application() {
    this.value = 1;

}

Application.prototype = {
    constructor : Application, 
/*
    <div class="dice-window-wrapper">
				
   
    <div class="dice-toolbar-wrapper">
    
        <ul>
        
            <li class="add"></li>
            <li class="remove"></li>
            <li class="roll"></li>
            <li>
            
                <ul class="dice-toolbar-counter-wrapper">
                
                    <li class="zero"></li>
                    <li class="zero"></li>
                    <li class="zero"></li>
                    <li class="zero"></li>
                    <li class="zero"></li>
                
                </ul>
            
            </li>
            
        </ul>
    
    </div>
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
        this.createObject()
    },

    createObject : function () {

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

	    // Window for the gameboard where the dice go.
	    this.gameboard     = NewElem.create(this.windowWrapper, "div", "class", "dice-content-wrapper");
	    this.gameboardUl   = NewElem.create(this.gameboard, "ul");

    }
}