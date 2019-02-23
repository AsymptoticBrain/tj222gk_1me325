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
        var pageConWr = document.getElementById("page-content-wrapper");

        this.diceWinWr = NewElem.create("div", "dice-window-wrapper");
            pageConWr.appendChild(this.diceWinWr);
        this.diceMenWr = NewElem.create("div", "dice-menu-wrapper");
            this.diceWinWr.appendChild(this.diceMenWr);
        this.closeDiv = NewElem.create("div", "close");
            this.diceMenWr.appendChild(this.closeDiv);
        this.diceTooWr = NewElem.create("div", "dice-toolbar-wrapper");
            this.diceWinWr.appendChild(this.diceTooWr);
        this.ulDiv = NewElem.create("ul");
            this.diceTooWr.appendChild(ulDiv);
        this.addDiv = NewElem.create("li", "add");
            ulDiv.appendChild(this.addDiv);
        var removeDiv = NewElem.create("li", "remove");
            ulDiv.appendChild(removeDiv);
        var rollDiv = NewElem.create("li", "roll");
            ulDiv.appendChild(rollDiv);
        var liDiv = NewElem.create("li");
            ulDiv.appendChild(liDiv);
    }
}