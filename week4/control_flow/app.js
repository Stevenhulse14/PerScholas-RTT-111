console.log("Testing Control Flow");

// This is my bathroom
/**
 * Scoping
 * Block: a section of code that seperated pieces of code in its own little enviorment
 * Function:
 * Global:
 * Module:
 *
 *
 */
// {
//   const washHands = "Sink";
//   const lookAtYourself = "Mirror";
// }

// Create a function

// function addition(a, b, c) {
//   console.log(a + b + c);
// }

// addition(1, 3, 5);

function calculator(num1, num2, operator) {
  let value = 0;
  if (operator === "+") {
    value = num1 + num2;
    console.log(value);
  }
  if (operator === "-") {
    value = num1 - num2;
    console.log(value);
  }
  if (operator === "*") {
    value = num1 * num2;
    console.log(value);
  }
  if (operator === "/") {
    value = num1 / num2;
    console.log(value);
  }
  // take two numbers and also an operators
}

//console.log(value);

// calculator(26, 64, "*");
// calculator(25, 75, "/");
// calculator(125, 50, "-");
// calculator(45, 56, "+");

const isSunny = 4 % 2 === 0 ? 5 : 3;

if (isSunny === 5) {
  console.log("Time to run :)");
} else {
  console.log("I will not go for a run");
}

// Switch Case Statement

function calcTwo(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 + num2);
      break;
    case "*":
      console.log(num1 + num2);
      break;
    case "/":
      console.log(num1 + num2);
      break;

    default:
      console.log("ERRRORRRRRR not updated!");
  }
}

// calcTwo(26, 64, "*");
// calcTwo(25, 75, "/");
// calcTwo(125, 50, "-");
// calcTwo(45, 56, "+");
