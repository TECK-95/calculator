let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function() {
    const clear = document.querySelector(".clear");
    const equals = document.querySelector(".equals");
    const decimal = document.querySelector(".decimal");
    const backspace = document.querySelector(".backspace");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }));

    operators.forEach((op) => op.addEventListener("click", function(e) {
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }));
})

function handleNumber(num) {
    if (currentValue.length <= 18) {
        currentValue += num;
    };
};

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
};

/*const add = function add(num1,num2) {
    return result = num1+num2;
    console.log(result);
};

const substract = function substract(num1,num2) {
    return result = num1-num2;
    console.log(result);
};

const multiply = function multiply(num1,num2) {
    return result = num1*num2;
    console.log(result);
};

const divide = function divide(num1,num2) {
    return result = num1/num2;
    console.log(result);
};

function operate(operator,num1,num2) {
    if (operator=add) {
        add(num1,num2);
    } else if (operator=substract) {
        substract(num1,num2);
    } else if (operator=multiply) {
        multiply(num1,num2);
    } else if (operator=divide) {
        divide(num1,num2);
    }
}*/