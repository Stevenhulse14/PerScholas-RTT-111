# Morning Exercise

## JavaScript Basics

### Choose Your Exercise:

1. **Problem Solving with Functions and Loops:**

   - Solve a JavaScript problem that involves functions and loops.

2. **Research and Answer Questions on Objects in JavaScript:**
   - Answer three questions related to objects in JavaScript by conducting research.

### Problem Solving Exercise: Factorial Calculation

**Exercise:**
Write a JavaScript function called `calculateFactorial` that takes one parameter:

- `num` (a non-negative integer): the number for which to calculate the factorial.

The function should return the factorial of the given number.

For example:

```javascript
// Example usage:
console.log(calculateFactorial(5)); // Output should be 120 (5 * 4 * 3 * 2 * 1 = 120)
console.log(calculateFactorial(0)); // Output should be 1 (by convention, 0! is defined to be 1)
```



### Research Exercise: Objects in JavaScript

#### Questions to Answer:

1. What is an object in JavaScript, and how does it differ from other data types?
2. How do you create an object literal in JavaScript?
3. What are the different ways to access properties of an object?
4. How do you add or remove properties from an object?
5. Explain the concept of prototype in JavaScript objects.
6. What are constructor functions, and how do they relate to creating objects?
7. How can you loop through the properties of an object?
8. What is object destructuring, and how is it used?
9. How do you clone an object in JavaScript?
10. What are the built-in methods available for objects in JavaScript?

**Instructions:**

- Choose three questions from the list above.
- Conduct research to find answers to the selected questions.
- Provide your answers in a clear and concise manner.

Feel free to choose the exercise that best suits your interests or learning goals for the day!
```

|

### Answers to Questions on Objects in JavaScript

1. **What is an object in JavaScript, and how does it differ from other data types?**

   - An object in JavaScript is a collection of key-value pairs where each key is a string (or Symbol) and each value can be any data type, including other objects, functions, and primitive data types. Objects differ from other data types like strings, numbers, booleans, and arrays because they are reference types, meaning they are stored as a reference in memory rather than directly containing their data.

2. **How do you create an object literal in JavaScript?**

   - You can create an object literal in JavaScript using curly braces `{}` and defining key-value pairs inside them. For example:

     ```javascript
     let person = {
       name: "John",
       age: 30,
       city: "New York",
     };
     ```

3. **What are the different ways to access properties of an object?**

   - You can access properties of an object using dot notation (e.g., `object.property`) or bracket notation (e.g., `object['property']`). Dot notation is commonly used when the property name is known and is a valid JavaScript identifier, while bracket notation is useful when the property name is dynamic or contains special characters.

4. **How do you add or remove properties from an object?**

   - To add a new property to an object, you can simply assign a value to a new key using either dot notation or bracket notation. To remove a property, you can use the `delete` keyword followed by the property name. For example:

     ```javascript
     let person = {};
     person.name = "John"; // Adding a property
     delete person.name; // Removing a property
     ```

5. **Explain the concept of prototype in JavaScript objects.**

   - In JavaScript, every object has a prototype property, which refers to another object that the current object inherits properties and methods from. The prototype chain allows objects to inherit properties and methods from their prototype objects, creating a hierarchical structure. Prototype-based inheritance is a fundamental concept in JavaScript's object-oriented programming paradigm.

6. **What are constructor functions, and how do they relate to creating objects?**

   - Constructor functions are special functions in JavaScript used for creating objects. They are called with the `new` keyword and typically have capitalized names to distinguish them from regular functions. Inside a constructor function, you can use the `this` keyword to refer to the newly created object. Constructor functions are used to create multiple instances of objects with similar properties and methods.

7. **How can you loop through the properties of an object?**

   - You can loop through the properties of an object using a `for...in` loop or `Object.keys()`, `Object.values()`, or `Object.entries()` methods. These methods allow you to iterate over the keys, values, or key-value pairs of an object, respectively.

8. **What is object destructuring, and how is it used?**

   - Object destructuring is a feature in JavaScript that allows you to extract multiple properties from an object and assign them to variables in a single statement. It provides a concise syntax for extracting values from objects and is commonly used in function parameters, variable declarations, and for iterating over objects. Here's an example:

     ```javascript
     let person = {
       name: "John",
       age: 30,
       city: "New York",
     };

     // Object destructuring
     let { name, age } = person;
     console.log(name); // Output: 'John'
     console.log(age); // Output: 30
     ```

9. **How do you clone an object in JavaScript?**

   - There are several ways to clone an object in JavaScript. One common method is using the `Object.assign()` method or the spread operator (`...`). Another approach is using `JSON.parse()` and `JSON.stringify()`. Here's an example using the spread operator:
     ```javascript
     let originalObject = { name: "John", age: 30 };
     let clonedObject = { ...originalObject };
     ```

10. **What are the built-in methods available for objects in JavaScript?**
    - There are several built-in methods available for objects in JavaScript, including:
      - `Object.keys()`: Returns an array of a given object's own enumerable property names.
      - `Object.values()`: Returns an array of a given object's own enumerable property values.
      - `Object.entries()`: Returns an array of a given object's own enumerable property key-value pairs.
      - `Object.assign()`: Copies the values of all enumerable own properties from one or more source objects to a target object.
      - `Object.freeze()`: Freezes an object, preventing new properties from being added to it, existing properties from being removed, or changes to the existing properties.
      - `Object.seal()`: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
      - `Object.create()`: Creates a new object with the specified prototype object and properties.

These are just a few of the built-in methods available for objects in JavaScript, and there are many more available in the JavaScript standard library.
