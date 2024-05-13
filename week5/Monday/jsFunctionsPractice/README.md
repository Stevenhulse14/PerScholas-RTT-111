### `addAndMultiplyBy5`

1. Define a function named `addAndMultiplyBy5`

1. This function has two **parameters**:

   - `num1` - which will receive a `number` as an argument
   - `num2` - which will receive a `number` as an argument

1. The purpose of this function is to add the values contained within the **parameters** together, multiply that result by `5`, and then return the result.

   Example Input:

   ```javascript
   const sumTimesFive = addAndMultiplyBy5(10, 5);
   ```

   Expected Output:

   ```javascript
   console.log(sumTimesFive); // 75
   ```

### `multiplyAndDivideBy5`

2. Define a function named `multiplyAndDivideBy5`

1. This function takes two **parameters**:

   - `num1` - which will receive a `number` as an argument
   - `num2` - which will receive a `number` as an argument

1. The purpose of this function is to multiply the values in the **parameters** together, divide that result by 5, and return the result.

   Example Input:

   ```javascript
   const productDividedByFive = multiplyAndDivideBy5(35, 10);
   ```

   Expected Output:

   ```javascript
   console.log(productDividedByFive); // 70
   ```

### `subtractTwoNumbers`

1. Define a function named `subtractTwoNumbers`

2. This function has two **parameters**:

   - `num1` - which will receive a `number` as an argument
   - `num2` - which will receive a `number` as an argument

3. The purpose of this function is to subtract the values contained in the **parameters** and return the result.

   Example Input:

   ```javascript
   const difference = subtractTwoNumbers(22, 7);
   ```

   Expected Output:

   ```javascript
   console.log(difference) = 15;
   ```

### `getCircleCircumference`

1. Define a function named `getCircleCircumference`

1. This function has one **parameter**:

   - `radius` - which will receive a `number` as an argument

1. The purpose of this function is to use the value contained in the **parameter** to find the circumference of the circle and return the result.

   Example Input:

   ```javascript
   const circumference = getCircleCircumference(5);
   ```

   Expected Output:

   ```javascript
   console.log(circumference); // 31.41592653589793
   ```

### `getFullName`

1. Define a function named `getFullName`

1. This function has two **parameters**:

   - `firstName` - which will receive a `string` as an argument
   - `lastName` - which will receive a `string` as an argument

1. The purpose of this function is to use string concatenation on the values contained in the **parameters** and return the result.

   Example Input:

   ```javascript
   const fullName = getFullName("Juan", "Ramirez");
   ```

   Expected Output:

   ```javascript
   console.log(fullName); // 'Juan Ramirez';
   ```

### `cube`

1. Define a function named `cube`

1. This function has one **parameter**:

   - `number` - which will receive a `number` as an argument

1. The purpose of this function is to find the cube of the value contained in the **parameter** and return the result.

   Example Input:

   ```javascript
   const cubed = cube(5);
   ```

   Expected Output:

   ```javascript
   console.log(cubed); // 125
   ```

1. ### `convertMinutesToSeconds(minutes)`

   #### Parameters

   - `minutes` - a number value which represents a number of minutes

   #### Return Value

   A number which represents the total number of seconds in the `minutes` value.

   #### Examples

   ```js
   convertMinutesToSeconds(5); // -> 300
   convertMinutesToSeconds(10); // -> 600
   ```

   #### Resources

   - [`*` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)

1. ### `greet(name)`

   #### Parameters

   - `name` - a string representing a person's name.

   #### Return Value

   A concatenated string containing the value in the `name` parameter

   #### Examples

   ```js
   greet("Beavis"); // -> "Hey Beavis!"
   greet("SpongeBob"); // -> "Hey SpongeBob!"
   ```

   ## Resources

   - [`+` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)

1. ### `getArea(width, height)`

   🚨 **This function should be written as an [arrow function](https://www.javascripttutorial.net/es6/javascript-arrow-function/)** 🚨

   #### Parameters

   - `width` - a number value which represents the width of a rectangle
   - `height` - a number value which represents the height of a rectangle

   #### Return Value

   A number which represents the total area of the rectangle based on the width and height

   #### Examples

   ```js
   getArea(17, 42); // -> 714
   getArea(22, 38); // -> 836
   ```

   ## Resources

   - [`*` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)

1. ### `getFirstName(person)`

   🚨 **This function should be written as an [arrow function](https://www.javascripttutorial.net/es6/javascript-arrow-function/)** 🚨

   #### Parameters

   - `person` - a TypeScript object with `firstName` and `lastName` properties.

   #### Return Value

   A string which represents the value stored in the `firstName` property of the `person` parameter

   #### Examples

   ```js
   getFirstName({ firstName: "Lelouche", lastName: "Lamperouge" }); // -> "Lelouche"
   getFirstName({ firstName: "John", lastName: "Henry" }); // -> "John"
   ```

1. ### `getLastElement(array)`

   🚨 **This function should be written as an [arrow function](https://www.javascripttutorial.net/es6/javascript-arrow-function/)** 🚨

   #### Parameters

   - `array` - a TypeScript array.

   #### Return Value

   The value stored in the last index of the `array` parameter

   #### Examples

   ```js
   getLastElement(["propane", "and", "propane", "accessories"]); // -> "accessories"
   getLastElement([true, true, false, true]); // -> true
   ```

   ## Resources

   - [`array.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
   - [`-` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)

1. ### `callOtherFunction(otherFunction, params)`

   #### Parameters

   - `otherFunction` - a TypeScript function.
   - `params` - an unknown value which will be used as an argument when calling `otherFunction`. Must be annotated as `unknown`

   #### Return Value

   The value returned from calling `otherFunction` with the `params` parameter

   #### Examples

   ```js
   callOtherFunction(convertMinutesToSeconds, 10); // -> 600
   callOtherFunction(getLastElement, ["hello", "Goodbye", "Aloha"]); // -> "Aloha"
   ```
