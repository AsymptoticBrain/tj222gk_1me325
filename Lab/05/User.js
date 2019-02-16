/**
 * Class to create users, stores both name and email.
 * 
 * @param {string} name 
 * @param {string} email 
 */

function User (name, email) {

    // Global variables
    this.name = name || 'Jhon Doe';
    this.email = email || 'jhon.doe@lnu.se';

    // Global functions
    this.sayHello = function() {
        console.log ("Hi, my name is " + this.name +".");
    };

    this.sayContactInformation = function() {
        console.log ("Send me an email at " + this.email +".");
    };
};


// Main testing the function

var Bob = new User ("Bob Fielding", "bobby@gmail.com");

    Bob.sayHello();
    Bob.sayContactInformation();

var Angela = new User ("Angela Brandt", "angela@hotmail.com");

    Angela.sayHello();
    Angela.sayContactInformation();

var Jhon = new User();

    Jhon.sayHello();
    Jhon.sayContactInformation();