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
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const number = document.createElement("div");
const calcul = document.querySelector("#calculate");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.textContent);
    if (!isNaN(button.textContent) && operator == "") {
      firstNum = firstNum + button.textContent;
      firstNum = Number(firstNum);
      number.textContent = firstNum;
    } else if (isNaN(button.textContent)) {
      operator = button.textContent;
      number.textContent = operator;
    } else if (!operator == "") {
      secondNum = secondNum + button.textContent;
      secondNum = Number(secondNum);
      number.textContent = secondNum;
    }
    resetDisplay();
    displayNumber();
  });
});

function displayNumber() {
  number.classList.add("displayNumber");
  display.appendChild(number);
}
function resetDisplay() {
  display.innerHTML = ""; // This will remove all child elements and reset the content.
}
clear.addEventListener("click", () => {
  resetDisplay();
  firstNum = "";
  operator = "";
  secondNum = "";
});
calcul.addEventListener("click", () => {
  if (!firstNum == "" && !operator == "" && !secondNum == "") {
    result = operate(+firstNum, operator, +secondNum);
    console.log(result);
    number.textContent = result;
    resetDisplay();
    displayNumber();
    firstNum = "";
    operator = "";
    secondNum = "";
    return result;
  }
});
