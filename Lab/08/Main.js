Main = {
    diceArray : [],
    result : document.getElementById("result"),

    init : function(event) {
        for (let i = 0; i < 100; i++) {
            var dice = new Dice();
            dice.roll();
            Main.diceArray.push(dice);  
        }
        
        Main.diceArray = Main.diceArray.removeAllof("value", 1);
        Main.diceArray = Main.diceArray.removeAllof("value", 6);

        for (let i = 0; i < Main.diceArray.length; i++) {
            if (i < Main.diceArray.length - 1) {
                result.innerHTML += (Main.diceArray[i].value + " , ");
            } else {
                result.innerHTML += (Main.diceArray[i].value + "." + "<br/>");
            }
        };

        result.innerHTML += (Main.diceArray.length);
    }
}
window.addEventListener("load", Main.init);