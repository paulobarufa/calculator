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
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "/":
            return divide(a, b);
        case "x":
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
let operator = "";


