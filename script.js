// CALCULATOR FUNCTIONS 
function add(a,b) { return a+b; }
function subtract(a,b) { return a-b; }
function multiply(a,b) { return a*b; }
function divide(a,b) { return a/b; }
function modulus(a,b) { return a%b; }

// DOM FUNCTIONS
const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.textContent);
    })
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
    console.log("+");
});

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => {
    console.log("-");
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => {
    console.log("*");
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
    console.log("/");
});

const modulusBtn = document.querySelector("#modulus");
modulusBtn.addEventListener("click", () => {
    console.log("%");
});

const decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener("click", () => {
    console.log(".");
});

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
    console.log("=");
});