Main = {
    
    init : function() {
            var human = new Human();
            var david = new Human("David Andersson", 27);
            var richard = new Human("Richard Feynman", 32);

            david.sayHello();
            human.sayHello();
            richard.sayHello();
        }
};
window.addEventListener("load", Main.init);