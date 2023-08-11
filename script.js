// Regular
//* Highlight
// TODO
//! Important
//? Question

//* Main functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

var firstNum = "";
var operator = "";
var secondNum = "";

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "x":
      return multiply(firstNum, secondNum);
    case "÷":
      return divide(firstNum, secondNum);
  }
}

let displayValue = "";
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".csreenCurent");
const clear = document.querySelector(".clear");
const delButton = document.querySelector(".delete");
const number = document.createElement("div");
const secondLine = document.querySelector(".screenLast");
const lastNum = document.createElement("div");
const calcul = document.querySelector("#calculate");
const operators = document.querySelectorAll(".btnOper");
const base = document.createElement("div");
base.textContent = 0;
base.classList.add("displayNumber");
display.appendChild(base);
let num = {
  displayNumber: "",
  firstNumber: "",
  secondNumber: "",
  operator: "",
  result: "",
};

//* Number buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (num.operator == "") {
      resetDisplay();
      num.displayNumber = num.displayNumber + button.textContent;
      num.firstNumber = Number(num.displayNumber);
      number.textContent = Number(num.displayNumber);
    } else {
      num.secondNumber = num.secondNumber + button.textContent;
      //firstNum = firstNum + button.textContent;
      num.secondNumber = Number(num.secondNumber);
      number.textContent = Number(num.secondNumber);
    }
    //TODO DELETE
    console.log("first " + num.firstNumber);
    console.log("second " + num.secondNumber);
    console.log("display " + num.displayNumber);

    displayNumber();
  });
});

// Operator buttons
operators.forEach((oper) => {
  oper.addEventListener("click", () => {
    console.log(oper.textContent);
    if (!num.result == "") {
      num.firstNumber = num.result;
      num.operator = oper.textContent;
      lastNum.textContent = num.firstNumber + " " + num.operator;
    } else if (!operator == "" && !!num.firstNumber == "") {
      num.firstNumber = operate(
        num.firstNumber,
        num.operator,
        num.secondNumber
      );
      num.operator = oper.textContent;
      lastNum.textContent = num.firstNumber + " " + num.operator;
    } else {
      operator = oper.textContent;
      num.operator = operator;
      lastNum.textContent = num.firstNumber + " " + operator;
      number.textContent = operator;
    }

    displayNumber();
  });
});
//* Display
function displayNumber() {
  number.classList.add("displayNumber");
  secondLine.appendChild(lastNum);
  display.appendChild(number);
}
function resetDisplay() {
  lastNum.textContent = "";
  number.textContent = 0;
  secondLine.innerHTML = "";
  display.innerHTML = ""; // This will remove all child elements and reset the content.
  displayNumber();
}

// Clear button
clear.addEventListener("click", () => {
  num.firstNumber = "";
  num.operator = "";
  num.secondNumber = "";
  num.displayNumber = "";
  num.result = "";
  resetDisplay();
});

//Delete button
delButton.addEventListener("click", () => {
  if (num.secondNumber == "") {
    delNumber();
    number.textContent = num.firstNumber;
    displayNumber();
  } else {
    num.secondNumber = Number(num.secondNumber.toString().slice(0, -1));
    number.textContent = num.secondNumber;
    displayNumber();
  }
});
function delNumber() {
  firstNum = Number(firstNum.toString().slice(0, -1));
  num.firstNumber = Number(num.firstNumber.toString().slice(0, -1));
}

// Calculation button
calcul.addEventListener("click", () => {
  if (num.secondNumber == 0 && num.operator == "÷") {
    alert("Error: division by zero");
    num.firstNumber = "";
    num.operator = "";
    num.secondNumber = "";
    num.displayNumber = "";
    num.result = "";
    resetDisplay();
  } else if (
    !num.firstNumber == "" &&
    !num.operator == "" &&
    !num.secondNumber == ""
  ) {
    num.result = operate(num.firstNumber, num.operator, num.secondNumber);
    lastNum.textContent =
      num.firstNumber + " " + num.operator + " " + num.secondNumber + " =";
    console.log(num.result);

    number.textContent = Math.round(num.result * 100) / 100;

    //resetDisplay();
    displayNumber();
    num.firstNumber = 0;
    num.operator = "";
    num.secondNumber = 0;
    return;
  }
});
