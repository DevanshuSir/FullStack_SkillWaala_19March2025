const prompt = require("prompt-sync")();

/**
 if(condition){
 statement
 }
 else if(condition){
 statement
 }
else{
statement
}

 */

// npm
// prompt-sync - package
// npm init -y step-1
//npm install prompt-sync step-2
//require("prompt-sync")() step-3

// calculator

let num1 = parseInt(prompt.hide("Enter first number :- "));
let num2 = parseInt(prompt("Enter second number :- "));
let operator = prompt("Enter Operator (+,-,/,*) :- ");

let result = "";

if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
} else {
  console.log("Invalid Input");
}

console.log(num1 + operator + num2 + " = " + result);
