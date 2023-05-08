// CALCULATOR FUNCTIONS 
// ref for rounding https://www.peterlunch.com/snippets/javascript-round
// Round to 5 decimals -> 100000
function add(a,b) { 
    if(Number.isInteger(a+b)){
        return a+b;
    }
    else {
        return Math.round((a+b) * 100000) / 100000;
    }
}
function subtract(a,b) { 
    if(Number.isInteger(a-b)){
        return a-b;
    }
    else {
        return Math.round((a-b) * 100000) / 100000;
    }
}
function multiply(a,b) {
    if(Number.isInteger(a*b)){
        return a*b;
    }
    else {
        return Math.round((a*b) * 100000) / 100000;
    }
}
function divide(a,b) {
    if(Number.isInteger(a/b)){
        return a/b;
    }
    else {
        return Math.round((a/b) * 100000) / 100000;
    }
}
function modulus(a,b) {
    return a%b;
}

function toggleNegative() {
}

function clear() {

}

function operate(operator, a, b) {
    
}

// DOM FUNCTIONS
const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
    })
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
});

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => {
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => {
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
});

const modulusBtn = document.querySelector("#modulus");
modulusBtn.addEventListener("click", () => {
});

const decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener("click", () => {
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clear();
})

const negativeToggleBtn = document.querySelector("#toggle-negative");
negativeToggleBtn.addEventListener("click", () => {
    toggleNegative();
})

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
    

});

// Global variable --- Starting dummy value
let userInput = "0";
let displayValue = "0";
document.querySelector("#output-text").textContent = userInput;