const prompt = require("prompt-sync")();

let age = prompt("Enter Age :- ");

age >= 18
  ? console.log("You are eligible for vote")
  : age < 18
  ? console.log("You are not eligible for vote")
  : console.log("Invalid Input");
