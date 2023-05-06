// CALCULATOR FUNCTIONS 
function add(a,b) { return a+b; }
function subtract(a,b) { return a-b; }
function multiply(a,b) { return a*b; }
function divide(a,b) { return a/b; }
function modulus(a,b) { return a%b; }

function clear() {
    userInput = "0";
    document.querySelector("#output-text").textContent = userInput;
}

function operate(operator, a, b) {
    if(a === "" || b == "") {
        return "ERROR: MAKE SURE USER INPUT IS VALID!";
    }
    
    switch(operator){
        case "+":
            return add(a,b);
            break;

        case "-":
            return subtract(a,b);
            break;

        case "*":
            return multiply(a,b);
            break;

        case "/":

            if(b === 0) {
                return "ERROR: CANT NOT DIVIDE BY ZERO!";
            }
            else{
                return divide(a,b);
            }
            
            break;

        case "%":

            return modulus(a,b);
            break;
    }
}

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

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clear();
})

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
    
    // RegEx = https://masteringjs.io/tutorials/fundamentals/split-on-multiple-characters
    let result = userInput.split(/[*/+-]+/);

    let operator = "";
    let a = "";
    let b = "";

    if(userInput[0] === "-") {
        operator = userInput[result[1].length+1];
        a = Number(result[1]);
        a *= -1;
        b = Number(result[2]);
    }

    else {
        operator = userInput[result[0].length];
        a = Number(result[0]);
        b = Number(result[1]);
    }

    userInput = operate(operator, a, b);
    
    document.querySelector("#output-text").textContent = userInput;

});

// Input Function
function updateUserInput(value){
    //if(value == "0") { userInput = value; }
    userInput = userInput == "0" ? value : userInput += value;
    document.querySelector("#output-text").textContent = userInput;
}

// Global variable --- Starting dummy value
let userInput = "0";
document.querySelector("#output-text").textContent = userInput;