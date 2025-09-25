function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    return parseInt(a) / parseInt(b);
}

function operate(a, b, operation) {
    switch (operation) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "divide":
            return divide(a, b);
        case "multiply":
            return multiply(a, b);
        default:
            return 0;
    }
}

function updateDisplay(val) {
    screen.textContent = val;
}

let screen = document.getElementById("screen");

let displayValue = 0;
let storedValue = 0;
let secondValue = 0;
let operator = "";

let numArrays = document.querySelectorAll(".num-btn");
numArrays.forEach(element => {
    element.addEventListener("click", function(e){
        let val = e.target.id.replace("k", "");
        displayValue = displayValue == 0 ? val.toString() : displayValue + val.toString();
        secondValue = displayValue;
        updateDisplay(displayValue);
    });
});

let operatorArray = document.querySelectorAll(".op-btn");
operatorArray.forEach(element => {
    element.addEventListener("click", function(e){
        let op = e.target.id.replace("k", "");

        if (operator == "") {
            
            operator = op;
            storedValue = displayValue;
            displayValue = 0;

        } else {

            let newVal = operate(storedValue, secondValue, operator);

            operator = op == "equals" ? "" : op;
            storedValue = newVal;

            displayValue = newVal.toString();
            updateDisplay(displayValue);

            displayValue = op == "equals" ? displayValue : 0;

        } 


    });
})

let clearBtn = document.getElementById("kclear");
clearBtn.addEventListener("click", function(e){
    displayValue = 0;
    secondValue = 0;
    storedValue = 0;
    operator = "";
    updateDisplay(displayValue);
});



