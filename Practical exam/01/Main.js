function add (a, b, sum) {

    var sumation = sum;
    sumation += a + b;
    return sumation;
};

function subtract (a, b, sum) {

    var subtraction = sum;
    subtraction += a - b;
    return subtraction;
};

function divide (a, b, sum) {

    var division = sum;
    if (b != a) {
        division += a / b;
    } else {
        console.log("Just don't do it");
        return;
    }

    return division;
};


var sum = 0;

sum = add(30, 20, sum);

sum = subtract(70, 30, sum);

sum = divide(100, 10, sum);

console.log ("Total sum = " + sum)