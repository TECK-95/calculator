const display = document.querySelector(".display");
const content = document.querySelector(".content");
const buttons = document.querySelectorAll(".buttons");
const one = document.querySelector(".one");
const clear = document.querySelector(".clear");
content.textContent = 0;
one.addEventListener("click", () => {
    
});
clear.addEventListener("click", () => {
    content.textContent = 0;
});

const add = function add(num1,num2) {
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