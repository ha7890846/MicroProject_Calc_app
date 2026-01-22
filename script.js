const nums = document.querySelectorAll(".nums");
const oprs = document.querySelectorAll(".opr");
const display = document.getElementById("inputs");
const resultDisplay = document.getElementById("result");
const clrBtn = document.getElementById("clr");
const deleteBtn = document.getElementById("delete");

let first = "";
let second = "";
let operator = "";

function calculate(a, b, op) {
  a = Number(a);
  b = Number(b);

  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Error" : a / b;
    default:
      return "";
  }
}

// Numbers
nums.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!operator) {
      first += btn.textContent;
      display.textContent = first;
    } else {
      second += btn.textContent;
      display.textContent = `${first} ${operator} ${second}`;
    }
  });
});

// Operators
oprs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const op = btn.textContent;

    if (op === "%" && first) {
      if (operator && second && !second.includes("%")) {
        const temp = second + "%";
        second = "" + (Number(first) * Number(second)) / 100;
        display.textContent = `${first} ${operator} ${temp}`;
      } else {
        first = "" + Number(first) / 100;
        display.textContent = first;
      }
      return;
    }

    if (op === "=" && first && second) {
      const result = calculate(first, second, operator);
      resultDisplay.textContent = "= " + result;
      first = "" + result;
      second = "";
      operator = "";
      return;
    }

    if (first && second) {
      first = "" + calculate(first, second, operator);
      second = "";
    }

    operator = op;
    display.textContent = `${first} ${operator}`;
    resultDisplay.textContent = "";
  });
});

// Clear
clrBtn.addEventListener("click", () => {
  first = second = operator = "";
  display.textContent = "Enter Values";
  resultDisplay.textContent = "";
});

// Delete
deleteBtn.addEventListener("click", () => {
  if (second) {
    second = second.slice(0, -1);
  } else if (operator) {
    operator = "";
  } else {
    first = first.slice(0, -1);
  }

  display.textContent = second
    ? `${first} ${operator} ${second}`
    : operator
    ? `${first} ${operator}`
    : first || "Enter Values";

  resultDisplay.textContent = "";
});
