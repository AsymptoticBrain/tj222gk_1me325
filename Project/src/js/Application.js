function Application() {
    this.value = 1;

}

Application.prototype = {
    constructor : Application, 
/*
    <div class="dice-window-wrapper">
				
    <div class="dice-menubar-wrapper">
    
        <div class="close"></div>
    
    </div>
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
        var parent = document.getElementById("page-content-wrapper");
        var element = document.createElement("div");
        element.className = "page-content-wrapper"

        element.innerHTML = "test";

        parent.appendChild(element);

    }
}