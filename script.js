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
    case "*":
      return multiply(firstNum, secondNum);
    case "/":
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
// Event listener for number buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleNumberClick(button.textContent);
  });
});

// Handle number button click
function handleNumberClick(value) {
  if (num.operator === "") {
    resetDisplay();
    if (value === "." && num.firstNumber.includes(".")) {
      return updateNumberDisplay(Number(num.firstNumber));
    }
    num.firstNumber += value;
    updateNumberDisplay(num.firstNumber);
  } else {
    if (value === "." && num.secondNumber.includes(".")) {
      return updateNumberDisplay(Number(num.secondNumber));
    }
    num.secondNumber += value;
    updateNumberDisplay(num.secondNumber);
  }

  // TODO: Delete
  console.log("first " + num.firstNumber);
  console.log("second " + num.secondNumber);
  console.log("display " + num.displayNumber);

  displayNumber();
}

// Update number display
function updateNumberDisplay(content) {
  number.textContent = content;
}

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (num.operator == "") {
//       resetDisplay();
//       if (button.textContent === "." && num.firstNumber.includes(".")) {
//         return (number.textContent = Number(num.firstNumber));
//       }
//       num.firstNumber += button.textContent;
//       number.textContent = num.firstNumber;
//     } else {
//       if (button.textContent === "." && num.secondNumber.includes(".")) {
//         return (number.textContent = Number(num.secondNumber));
//       }
//       num.secondNumber += button.textContent;
//       number.textContent = num.secondNumber;
//     }
//     //TODO DELETE
//     console.log("first " + num.firstNumber);
//     console.log("second " + num.secondNumber);
//     console.log("display " + num.displayNumber);

//     displayNumber();
//   });
// });

// Operator buttons
operators.forEach((oper) => {
  oper.addEventListener("click", () => {
    handleOperatorClick(oper.textContent);
  });
});

// Handle operator button click
function handleOperatorClick(operator) {
  console.log(operator);

  if (num.result !== "" && num.firstNumber === "") {
    num.firstNumber = num.result;
    num.operator = operator;
    updateLastNumDisplay();
  } else if (
    num.operator !== "" &&
    num.firstNumber !== "" &&
    num.secondNumber !== ""
  ) {
    num.firstNumber = operate(
      Number(num.firstNumber),
      num.operator,
      Number(num.secondNumber)
    );
    num.operator = operator;
    updateLastNumDisplay();
  } else {
    num.operator = operator;
    updateLastNumDisplay();
    updateNumberDisplay(operator);
  }

  displayNumber();
}

// Update lastNum display
function updateLastNumDisplay() {
  lastNum.textContent = num.firstNumber + " " + num.operator;
}

// Update number display
function updateNumberDisplay(content) {
  const truncatedContent = truncateNumber(content, 10); // Truncate at a reasonable length
  number.textContent = truncatedContent;
}

// Truncate or round the number to a specified length
function truncateNumber(num, length) {
  const numStr = num.toString();
  if (numStr.length <= length) {
    return numStr;
  }
  return numStr.slice(0, length);
}
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

function clearButtorn() {
  num.firstNumber = "";
  num.operator = "";
  num.secondNumber = "";
  num.displayNumber = "";
  num.result = "";
  resetDisplay();
}

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
  calculation();
});
function calculation() {
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
    num.result = operate(
      Number(num.firstNumber),
      num.operator,
      Number(num.secondNumber)
    );
    lastNum.textContent =
      num.firstNumber + " " + num.operator + " " + num.secondNumber + " =";
    console.log(num.result);

    number.textContent = Math.round(num.result * 100) / 100;

    //resetDisplay();
    displayNumber();
    num.firstNumber = "";
    num.operator = "";
    num.secondNumber = "";
  }
}

// Allow keybard input
const allowedKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9", // Numeric keys
  ".",
  "+",
  "-",
  "*",
  "/",
  "Enter",
  "=",
  "Backspace",
  "c",
];
const allowedOpers = ["+", "-", "*", "/"];
const allowedNums = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9", // Numeric keys
  ".",
];

// Add a keyboard event listener to the document
document.addEventListener("keydown", (event) => {
  const keyPressed = event.key;

  // Check if the pressed key is in the allowedKeys array
  if (!allowedKeys.includes(keyPressed)) {
    event.preventDefault(); // Prevent the default action of the key
    return; // Exit the function
  }
  if (keyPressed === "Enter" || keyPressed === "=") {
    calculation();
  } else if (keyPressed === "Backspace") {
    if (num.secondNumber == "") {
      delNumber();
      number.textContent = num.firstNumber;
      displayNumber();
    } else {
      num.secondNumber = Number(num.secondNumber.toString().slice(0, -1));
      number.textContent = num.secondNumber;
      displayNumber();
    }
  } else if (allowedOpers.includes(keyPressed)) {
    handleOperatorClick(keyPressed);
  } else if (allowedNums.includes(keyPressed)) {
    handleNumberClick(keyPressed);
  } else if (keyPressed === "c") {
    clearButtorn();
  }
  console.log("Valid key pressed: " + keyPressed);
});
