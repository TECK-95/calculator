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

    clear.addEventListener("click", function() {
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    });

    equals.addEventListener("click", function() {
        calculate();
        previousScreen.textContent = "";
        if (previousValue.length <=18) {
            currentScreen.textContent = previousValue;
        } else {
            currentScreen.textContent = previousValue.slice(0, 18) + "...";
        }
    });

    decimal.addEventListener("click", function() {
        addDecimal();
        currentScreen.textContent = currentValue;
    });

    backspace.addEventListener("click", function() {
        removeLast();
        currentScreen.textContent = currentValue;
    });
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

function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === "+") {
        previousValue += currentValue;
        currentValue = previousValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
        currentValue = previousValue;
    } else if (operator === "X") {
        previousValue *= currentValue;
        currentValue = previousValue;
    } else {
        previousValue /= currentValue;
        currentValue = previousValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
};

function roundNumber(num) {
    return Math.round(num *1000000000000000000) / 1000000000000000000;
};

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }
};

function removeLast() {
    currentValue = currentValue.substring(0, currentValue.length -1);
}

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