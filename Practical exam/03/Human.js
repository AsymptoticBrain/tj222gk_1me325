function Human (name, age) {
    this.name = name || "Amelia Pond";
    this.age = age || 23;
}

Human.prototype = {
    constructor : Human, 
    sayHello : function () {
        console.log("Hello My name is " + this.name + " and I am " + this.age + " years old.");
    }
};