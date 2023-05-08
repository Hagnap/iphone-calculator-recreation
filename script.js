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
    userInput = '';
    displayValue = '';

    document.querySelector("#output-text").textContent = displayValue;
}

function operate(operator, a, b) {

    console.log("In operate()");
    console.log("a: " + a)
    console.log("Operator: " + operator)
    console.log("b: " + b)
    
    console.log();

}

// INPUT FUNCTIONS
function resetButtonColors() {
    addBtn.style = "backgroundColor = rgb(214, 166, 8, 1.0)";
    subtractBtn.style = "backgroundColor = rgb(214, 166, 8, 1.0)";
    multiplyBtn.style = "backgroundColor = rgb(214, 166, 8, 1.0)";
    divideBtn.style = "backgroundColor = rgb(214, 166, 8, 1.0)";
    modulusBtn.style = "backgroundColor = rgb(214, 166, 8, 1.0)";
}
function updateUserInput(value) {
    
    var a = '';
    var b = '';
    var operator = '';

    // Store user input + value if value is not an equal sign
    var temp = value === '=' ? userInput : userInput + value; 
    var expressionSlit = temp.split(/([%*/+-]+)/g)

    // If value is an operator -> Check if another operator is already present. If so perform the calculation, otherwise update userInput
    console.table(expressionSlit);
    if(expressionSlit.length > 3) {
        console.log("ERROR: Too many operators");
    }

    // If value is an equal sign perform operation
    else if(value === '=') {

        a = expressionSlit[0];
        operator = expressionSlit[1];
        b = expressionSlit[2];

        operate(operator, a, b);
    }

    // Otherwise...
    else {
        // Update input
        userInput += value;
        console.log(userInput);
    }

} 

function updateDisplayValue(value) {
    
    // If value is NOT an operator or 0 -> Update display value 
    if(!(value === '+' || value === '-'|| value === '*' || value === '/' || value === '%')) {

        // If displayValue is 0 -> Overwrite it with value
        if(displayValue === '0') {
            displayValue = value;
        }

        // Otherwise concat/add value
        else {
            displayValue += value;
        }
        
    }

    // If an operator is pressed -> Now display a zero
    else {
        displayValue = '0';
    }
   
    document.querySelector("#output-text").textContent = displayValue;
}

// DOM FUNCTIONS
const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        updateUserInput(button.textContent);
        updateDisplayValue(button.textContent);
        resetButtonColors();
    })
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
    updateUserInput(addBtn.textContent);
    updateDisplayValue(addBtn.textContent);
    addBtn.style = "background-color: rgba(214, 166, 8, 0.75)";
});

const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", () => {
    updateUserInput(subtractBtn.textContent);
    updateDisplayValue(subtractBtn.textContent);
    subtractBtn.style = "background-color: rgba(214, 166, 8, 0.75)";
});

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => {
    updateUserInput('*');
    updateDisplayValue('*');
    multiplyBtn.style = "background-color: rgba(214, 166, 8, 0.75)";
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => {
    updateUserInput(divideBtn.textContent);
    updateDisplayValue(divideBtn.textContent);
    divideBtn.style = "background-color: rgba(214, 166, 8, 0.75)";
});

const modulusBtn = document.querySelector("#modulus");
modulusBtn.addEventListener("click", () => {
    updateUserInput(modulusBtn.textContent);
    updateDisplayValue(modulusBtn.textContent);
    modulusBtn.style = "background-color: rgba(214, 166, 8, 0.75)";
});

const decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener("click", () => {
    updateUserInput(decimalBtn.textContent);
    updateDisplayValue(decimalBtn.textContent);
    resetButtonColors();
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clear();
    resetButtonColors();
})

const negativeToggleBtn = document.querySelector("#toggle-negative");
negativeToggleBtn.addEventListener("click", () => {
    toggleNegative();
    resetButtonColors();
})

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
    
    console.log(equalBtn.textContent);
    updateUserInput(equalBtn.textContent);
    resetButtonColors();
});

// Global variable --- Starting dummy value
let userInput = '';
let displayValue = '0';
document.querySelector("#output-text").textContent = displayValue;