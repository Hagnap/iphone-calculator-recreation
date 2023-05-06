# odin-calculator

## Project Description
This project is a simple re-creation of the calculator app found on iPhones. It is only a recreation of the vertical version of the calculator, not the horizontal version, just wanted to point that out. I chose this calculator to recreate as I found that I lack the creative skills to create a design from scratch but enjoy the challenge of finding something and doing my best to recreate it. This calculator works with integer and decimal values. However it rounds to the fifth decimal place. 

The operations a user can perform are
  * Addition
  
  * Subtraction
  
  * Multiplication
  
  * Divison
  
  * Integer Remainder Divison (Modulus)
  
## Link
https://jhagg26.github.io/odin-calculator/index.html

## Tech Stack
* HTML

* CSS

* Flexbox

* JavaScript



## Known Issues
* It can only process one operation at time. This is due to the parsing of the user-input. I am still working on potential fixes for this.
  * ex: `3+3+3` will result in 6 instead of 9
  
* Returns `Not a Number` / `NaN` when user tries to user `+/-` on 1+ characters in the user input. Need to add/return an error message for this
 * `+/-` applied on `3+1` will return `NaN`
