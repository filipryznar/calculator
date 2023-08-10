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

// operators.forEach((operator) => {
//   operator.addEventListener("click", () => {
//     console.log(operator.textContent);
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log(button.textContent);
//     if (!isNaN(button.textContent) && operator == "") {
//       firstNum = firstNum + button.textContent;
//       firstNum = Number(firstNum);
//       number.textContent = firstNum;
//     } else if (isNaN(button.textContent)) {
//       operator = button.textContent;
//       lastNum.textContent = firstNum + " " + operator;
//       number.textContent = operator;
//     } else if (!operator == "") {
//       secondNum = secondNum + button.textContent;
//       secondNum = Number(secondNum);
//       number.textContent = secondNum;
//     }
//     resetDisplay();
//     displayNumber();
//   });
// });
let variable = "";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator == "") {
      resetDisplay();
      firstNum = firstNum + button.textContent;
      firstNum = Number(firstNum);
      number.textContent = firstNum;
    } else {
      firstNum = firstNum + button.textContent;
      firstNum = Number(firstNum);
      number.textContent = firstNum;

      //lastNum.textContent = firstNum + " " + operator;
    }

    console.log("first " + firstNum);
    console.log("second " + secondNum);
    displayNumber();
  });
});

operators.forEach((oper) => {
  oper.addEventListener("click", () => {
    console.log(oper.textContent);
    operator = oper.textContent;
    lastNum.textContent = firstNum + " " + operator;
    secondNum = firstNum;
    firstNum = "";
    number.textContent = operator;
    displayNumber();
  });
});

function displayNumber() {
  number.classList.add("displayNumber");
  secondLine.appendChild(lastNum);
  display.appendChild(number);
}
function resetDisplay() {
  lastNum.textContent = "";
  secondLine.innerHTML = "";
  display.innerHTML = ""; // This will remove all child elements and reset the content.
}
clear.addEventListener("click", () => {
  resetDisplay();
  firstNum = "";
  operator = "";
  secondNum = "";
});

delButton.addEventListener("click", () => {
  if (!firstNum == "") {
    delNumber();
    number.textContent = firstNum;
    displayNumber();
  }
  //TODO DOplnit second number
});
function delNumber() {
  firstNum = Number(firstNum.toString().slice(0, -1));
}
calcul.addEventListener("click", () => {
  if (!firstNum == "" && !operator == "" && !secondNum == "") {
    result = operate(+firstNum, operator, +secondNum);
    lastNum.textContent = firstNum + " " + operator + " " + secondNum + " =";
    console.log(result);

    number.textContent = result;
    //resetDisplay();
    displayNumber();
    firstNum = "";
    operator = "";
    secondNum = "";

    return result;
  }
});
