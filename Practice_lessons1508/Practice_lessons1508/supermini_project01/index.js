function sum(a, b) {}

function subtract(a, b) {}

function multiply(a, b) {}

function divide(a, b) {}

/* Do not touch below this line */
let output = document.querySelector("#output");

let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;

document.querySelectorAll("#calculator .number").forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.currentTarget.textContent;
    if (resetAfterOperation) {
      output.value = value;
      resetAfterOperation = false;
    } else {
      output.value += value;
    }
  });
});

document.querySelectorAll("#calculator .operation").forEach((button) => {
  button.addEventListener("click", (event) => {
    firstNumber = Number.parseInt(output.value);
    operation = event.currentTarget.dataset.action;
    resetAfterOperation = true;
  });
});

const equal = document.querySelector("#calculator .equal");
equal.addEventListener("click", () => {
  if (!operation) {
    return;
  }
  resetAfterOperation = true;
  let secondNumber = Number.parseInt(output.value, 10);

  if (operation === "sum") {
    output.value = sum(firstNumber, secondNumber);
  } else if (operation === "subtract") {
    output.value = subtract(firstNumber, secondNumber);
  } else if (operation === "multiply") {
    output.value = multiply(firstNumber, secondNumber);
  } else if (operation === "divide") {
    output.value = divide(firstNumber, secondNumber);
  }
  //reset operation
  operation = null;
});
