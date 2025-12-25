const numBttn = document.querySelectorAll(".nums");
const oprBttn = document.querySelectorAll(".opr");
const display = document.getElementById("inputs");
const resultDisplay = document.getElementById("result");
const clrBtn = document.getElementById("clr");

let firstOpr = "";
let operator = "";
let secondOpr = "";
let result = "";
numBttn.forEach(bttn => {
    bttn.addEventListener("click", function () {
        if (operator === "") {
            firstOpr += this.textContent;
            display.textContent = firstOpr;
            resultDisplay.textContent = "";
        } else {
            secondOpr += this.textContent;
            display.textContent = firstOpr + " " + operator+" "+secondOpr;
        }

    })
})
oprBttn.forEach(bttn => {
    bttn.addEventListener("click", function () {
        if (firstOpr !== "" && secondOpr !== "") {
            let num1 = Number(firstOpr);
            let num2 = Number(secondOpr);
            let result;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
            }
            display.textContent = firstOpr + " " + operator + " " + secondOpr;
            resultDisplay.textContent = "=" + result;
            firstOpr = result;
            secondOpr = "";
            operator = "";
        }
        else if (firstOpr !== "") {
            operator += this.textContent;
            display.textContent = firstOpr + " " + operator;
            resultDisplay.textContent = "";
        }
    })
})
clrBtn.addEventListener("click", function () {
    firstOpr = secondOpr = operator=result = "";
    display.textContent = "enter Values";
    resultDisplay.textContent = "";
})