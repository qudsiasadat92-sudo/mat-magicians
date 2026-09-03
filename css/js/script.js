// =========================
// CALCULATOR VARIABLES
// =========================

let currentNumber = "";
let previousNumber = "";
let operator = "";


// Get calculator display
const display = document.getElementById("display");


// =========================
// ADD NUMBER
// =========================

function appendNumber(number) {

    // Prevent more than one decimal point
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    currentNumber += number;

    display.textContent = currentNumber;
}


// =========================
// CHOOSE OPERATOR
// =========================

function chooseOperator(selectedOperator) {

    if (currentNumber === "") {
        return;
    }

    previousNumber = currentNumber;

    currentNumber = "";

    operator = selectedOperator;
}


// =========================
// CALCULATE
// =========================

function calculate() {

    if (
        previousNumber === "" ||
        currentNumber === "" ||
        operator === ""
    ) {
        return;
    }

    const firstNumber = Number(previousNumber);

    const secondNumber = Number(currentNumber);

    let result;


    // Addition
    if (operator === "+") {

        result = firstNumber + secondNumber;
    }


    // Subtraction
    else if (operator === "-") {

        result = firstNumber - secondNumber;
    }


    // Multiplication
    else if (operator === "*") {

        result = firstNumber * secondNumber;
    }


    // Division
    else if (operator === "/") {

        if (secondNumber === 0) {

            display.textContent = "Error";

            currentNumber = "";

            previousNumber = "";

            operator = "";

            return;
        }

        result = firstNumber / secondNumber;
    }


    // Show result
    currentNumber = result.toString();

    display.textContent = currentNumber;


    // Reset operation
    previousNumber = "";

    operator = "";
}


// =========================
// CLEAR
// =========================

function clearDisplay() {

    currentNumber = "";

    previousNumber = "";

    operator = "";

    display.textContent = "0";
}


// =========================
// POSITIVE / NEGATIVE
// =========================

function toggleSign() {

    if (currentNumber === "") {
        return;
    }

    currentNumber =
        (Number(currentNumber) * -1).toString();

    display.textContent = currentNumber;
}


// =========================
// PERCENTAGE
// =========================

function percentage() {

    if (currentNumber === "") {
        return;
    }

    currentNumber =
        (Number(currentNumber) / 100).toString();

    display.textContent = currentNumber;
}