function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
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
let newCalc = true;

let numArrays = document.querySelectorAll(".num-btn");
let operatorArray = document.querySelectorAll(".op-btn");
let clearBtn = document.getElementById("kclear");
let equalsBtn = document.getElementById("kequals");


numArrays.forEach(element => {
    element.addEventListener("click", function(e){

        operatorArray.forEach(ele => {
            ele.classList.remove("active");
        });

        if (newCalc == true) {
            displayValue = 0;
            newCalc = false;
        }

        let val = e.target.id.replace("k", "");
        if (val == "decimal") {
            val = "."
        }

        if (displayValue.toString().includes(".") && val == ".") return;

        displayValue = displayValue == "0" && val !== "." ? val.toString() : displayValue + val.toString();
        secondValue = displayValue;
        updateDisplay(displayValue);
    });
});


operatorArray.forEach(element => {
    element.addEventListener("click", function(e){

        let liveOperatorArray = document.querySelectorAll(".op-btn");

        let op = e.target.id.replace("k", "");
        let activeFlag = false;
        
        liveOperatorArray.forEach(ele => {

            if (ele.classList.contains("active")) {
                activeFlag = true;
            }

            if (ele.id == e.target.id) {
                ele.classList.add("active");
            } else {
                ele.classList.remove("active");
            }
        })

        secondValue = displayValue;



        if (activeFlag) {
            operator = op;
            return;
        }

        if (operator == "") {
            
            operator = op;
            storedValue = displayValue;
            displayValue = 0;

        } else {

            let newVal = Math.round((operate(storedValue, secondValue, operator) + Number.EPSILON) * 100) / 100;

            operator = op == "equals" ? "" : op;
            storedValue = newVal;

            displayValue = newVal.toString();
            updateDisplay(displayValue);

            displayValue = op == "equals" ? displayValue : 0;

        } 

    });
})

clearBtn.addEventListener("click", function(e){
    operatorArray.forEach(ele => {
        ele.classList.remove("active");
    });

    displayValue = 0;
    secondValue = 0;
    storedValue = 0;
    operator = "";
    updateDisplay(displayValue);
});

equalsBtn.addEventListener("click", function(e){

    let newVal = Math.round((operate(storedValue, displayValue, operator) + Number.EPSILON) * 100) / 100;

    operator = "";
    storedValue = displayValue;

    displayValue = newVal.toString();
    updateDisplay(displayValue);

    newCalc = true;
});

