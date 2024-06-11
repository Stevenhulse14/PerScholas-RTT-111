// import Items I need to use this

// { } = Deconstruction
// const me = { name: Steven, age: 17}
// const { name , age} = me

// name or age instead of using dot notation me.name or me.age

import funcs, { add, sub, mult, div } from "./modules/helper.js";

/**
 This funcs object is just an object and we can use the same thing on this object 
 that we already know of.
 */

console.log(
  funcs,
  "Add :",
  funcs.add(3, 7),
  "Sub :",
  funcs.sub(4, 1),
  "Div :",
  funcs.div(2, 1)
);
//
/*for (let i = 0 ; i  <= value ; i++)
    
    
funcs = { add: add(), sub:sub(), mult:mult(), div:div()}    


use a for in loop to iterate over an object and give a name to those Keys
    */
for (let key in funcs) {
  console.log(key, funcs[key](4, 2));
}

console.log("Add test: ", add(100, 110));
console.log("Sub test: ", sub(100, 110));
console.log("Mult test: ", mult(100, 110));
console.log("div test: ", div(100, 110));
