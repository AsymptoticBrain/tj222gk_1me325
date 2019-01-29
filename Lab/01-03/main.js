
var numbers = [0,1,2,3,4,5,6,7,8,9];
var INTERVAL = 2000;



function init() {
   window.setInterval(createSum, INTERVAL); // Interval differs from Timeout by that it will fire the function every interval vs a single delay in setTimeout
} 
window.addEventListener("load", init)



function createSum() {
    if (numbers.length >= 2) {
        createElem();
    } else  {
        location.reload();  // Reloads the current document
    }
}

function createElem() {

    var parent = document.getElementById("sum-list");
    var element = document.createElement("li");

        element.innerHTML = randomSum(2);

        parent.appendChild(element);
}

function randomSum(num) {

    var sumNumbers = [];
    var Sum = 0;
    var HTML = "";


    for (let i = 0; i < num; i++) {

        let index = Math.floor(Math.random() * numbers.length );

        sumNumbers.push(numbers[index]);
        numbers.splice(index,1);
    }

    for (let i = 0; i < sumNumbers.length; i++) {

        Sum += sumNumbers[i];

        if (i == 0) {

            HTML +=  sumNumbers[i];

        } else {

            HTML +=  " + " +  sumNumbers[i];
        }
        
    }

    HTML += " = " + Sum;

    return HTML;
}
