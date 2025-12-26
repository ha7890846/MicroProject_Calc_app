const numBttn = document.querySelectorAll(".nums");
const oprBttn = document.querySelectorAll(".opr");
const display = document.getElementById("inputs");
const resultDisplay = document.getElementById("result");
const clrBtn = document.getElementById("clr");
let firstOpr = "";
let operator = "";
let secondOpr = "";
let result = "";
numBttn.forEach((bttn) => {
  bttn.addEventListener("click", function () {
    if (operator === "") {
      firstOpr += this.textContent;
      display.textContent = firstOpr;
    } else {
      secondOpr += this.textContent;
      display.textContent = `${
        firstOpr
      } ${operator
    } ${ secondOpr }`;
    }
  });
});
function calculate(first, second, opr) {
  let num1 = Number(first);
  let num2 = Number(second);
  let cal;
  switch (operator) {
    case "+":
      cal = num1 + num2;
      break;
    case "-":
      cal = num1 - num2;
      break;
    case "*":
      cal = num1 * num2;
      break;
    case "/":
      cal = num1 / num2;
      break;
  }
  return cal;
}
oprBttn.forEach((bttn) => {
  bttn.addEventListener("click", function () {
    if (firstOpr !== "" && secondOpr !== "") {
      let val = calculate(firstOpr, secondOpr, operator);
      firstOpr = val;
      result = "" + val;
      secondOpr = "";
      operator = this.textContent;
      if(operator !== "=") {
        display.textContent = firstOpr + " " + operator;
      } else {
        resultDisplay.textContent = "= " + result;
      }
    } else if (firstOpr !== "" && secondOpr === "" ) {
      operator = this.textContent;
      display.textContent = firstOpr + " " + operator;
      resultDisplay.textContent = "";
    }
  });
});
clrBtn.addEventListener("click", function () {
  firstOpr = secondOpr = operator = result = "";
  display.textContent = "enter Values";
  resultDisplay.textContent = "";
});
