/**
 * Functions
 *
 * Arrow Functions
 * Invoking Calling
 * Hoisting
 *
 * Data Collection
 *
 * Object:
 * Pass by reference vs value
 * object syntax
 * Key Value Pair
 * compairing data collections
 *
 * Arrays
 * adding Item to array by index and push()
 * length of array.
 * Nested arrays
 * iteration
 * Array Methods concat() , join(), push(), pop(), indexOf(), reverse()
 *
 * Loops & Iteration
 *
 * for
 * for ... in
 * for ... of
 * while
 * do .. while
 * `break` `continue`
 */

// Global Block and Functional Scope

function calculateFactorial(num) {
  let acc = 1;
  if (num <= 1) {
    return 1;
  } else {
    for (let i = 1; i < num; i++) {
      acc += acc * i;
    }
  }
  return acc;
}

console.log(calculateFactorial(3));

// Differences between Arrow and regular function syntax
/**
 * Syntax
 * Arrow function Implicity returns a value
 * which means we don't have to use the return Keyword
 *
 */
//console.log(sayHello());

// function sayHello() {
//   console.log("Hello Class");
// }

// const sayhello = () => console.log(`Hello Class`);

// function isItRaining(value) {
//   if (value) {
//     return `Value is ${value}`;
//   } else {
//     return `Its not raining`;
//   }
// }

// const isitRaining = (value) =>
//   value ? `Value is ${value}` : `Its not raining`;

// console.log(isItRaining(true), isitRaining(false));

console.log(typeof [], typeof {});

let arr = [1, 2, 3];
let obj = { one: "charmander", two: "squirtel", three: "Snorlax" };

// for (let i = 0; i < obj.length - 1; i++) {
//   console.log(obj[i]);
// }
let value = Object.values(obj)[0];
//console.log(value);

for (key in obj) {
  console.log("Keys:", key, "Values", obj[key]);
}
