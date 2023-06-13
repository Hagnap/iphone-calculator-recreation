# iphone-calculator

## Project Description
This project is a simple re-creation of the calculator app found on iPhones. It is only a recreation of the vertical version of the calculator, not the horizontal version, just wanted to point that out. I chose this calculator to recreate as I found that I lack the creative skills to create a design from scratch but enjoy the challenge of finding something and doing my best to recreate it. This is not a 1:1 recreation. This calculator works with integer and decimal values. However it rounds to the fifth decimal place. 

The operations a user can perform are
  * Addition
  
  * Subtraction
  
  * Multiplication
  
  * Divison
  
  * Integer Remainder Divison (Modulus)
    * On the iPhone calculator app this operator is actually a percentage operator however I chose to make this a modulus operator due to simplicity.
  
## Link
https://jhagg26.github.io/iphone-calculator-recreation/index.html

## Tech Stack
* HTML

* CSS

* Flexbox

* JavaScript

## Challenges Faced
* Parsing the input to be calculated
  * When doing this task I was warned about the dangers of `.eval()` and how people can pass code into it that JS will execute. So I had to think of ways to parse the string, break it down, and extract the neccesary parts to make an accurate calculation.

* Dealing with multiple decimal places

* Dealing with multiple negative numbers

* Making the second number negative

* Toggling Negative/Positive values with the `+/-` operation

## Guide/Reference
This website was created following the Odin Project.
You can find the reference [here](https://www.theodinproject.com/lessons/foundations-calculator).
