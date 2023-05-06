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
        updateUserInput(button.textContent);
    })
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
    updateUserInput("+");
});

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => {
    updateUserInput("-");
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => {
    updateUserInput("*");
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
    updateUserInput("/");
});

const modulusBtn = document.querySelector("#modulus");
modulusBtn.addEventListener("click", () => {
    updateUserInput("%");
});

const decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener("click", () => {
    updateUserInput(".");
});

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
    console.log("=");
});

// Input Functions
function updateUserInput(value){
    //if(value == "0") { userInput = value; }
    userInput = userInput == "0" ? value : userInput += value;
    
    document.querySelector("#output-text").textContent = userInput;
}

// Global variable --- Starting dummy value
let userInput = "0";
document.querySelector("#output-text").textContent = userInput;