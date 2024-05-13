### Functions

1. ### `isUnderFive(number)`

   #### Parameters

   - `number` - a JavaScript number

   #### Return Value

   A boolean indicating whether or not `number` is less than five.

   #### Examples

   ```js
   isUnderFive(4);
   // true
   isUnderFive(10);
   // false
   isUnderFive(5);
   // false
   ```

2. ### `isEven(number)`

   #### Parameters

   - `number` - a JavaScript number

   #### Return Value

   A boolean indicating whether or not `number` is evenly divisible by `2`.

   #### Hint

   You can use the [`%` remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) to check if `number` has any remainder when divided by `2`.

   #### Examples

   ```js
   isEven(4);
   // true
   isEven(10);
   // true
   isEven(5);
   // false
   ```

3. ### `startsWithJ(string)`

   #### Parameters

   - `string` - any JavaScript string

   #### Return Value

   A boolean indicating whether or not the first character in `string` is a capital `'J'`.

   #### Examples

   ```js
   startsWithJ("JavaScript");
   // true
   startsWithJ("PHP");
   // false
   startsWithJ("HTML");
   // false
   startsWithJ("Java");
   // true
   startsWithJ("Kotlin");
   // false
   startsWithJ("C#");
   // false
   ```

4. ### `isOldEnoughToDrink(person)`

   #### Parameters

   - `person` - an object with `name` (a string) and `age` (a number) properties

   #### Return Value

   A boolean indicating whether or not the `person` is of legal drinking `age` (at least 21).

   #### Examples

   ```js
   const bart = {
     name: "Bartholomew JoJo Simpson",
     age: 10,
   };
   isOldEnoughToDrink(bart);
   // false
   ```

5. ### `isOldEnoughToDrive(person)`

   #### Parameters

   - `person` - an object with `name` (a string) and `age` (a number) properties

   #### Return Value

   A boolean indicating whether or not the `person` is of legal driving `age` (at least 16).

   #### Examples

   ```js
   const homer = {
     name: "Homer Jay Simpson",
     age: 39,
   };
   isOldEnoughToDrive(homer);
   // true
   ```

6. ### `isOldEnoughToDrinkAndDrive(person)`

   #### Parameters

   - `person` - an object with `name` (a string) and `age` (a number) properties

   #### Return Value

   `false`

   <p align="middle">
     <img src="assets/drink-and-drive.png" alt="drink and drive false">
   </p>

7. ### `categorizeAcidity(pH)`

   #### Parameters

   - `pH` - A number representing the `pH` level of a substance

   #### Return Value

   A string describing [the `pH` level of a substance](http://google.com/?q=ph%20level) in plain English. Valid `pH` levels go from `0` to `14`.

   - `7` is `"neutral"`
   - anything from `0` up to `7` is `"acid"`
   - anything from `14` down to `7` is `"base"`
   - anything else is an `"invalid pH level"`

   #### Examples

   ```js
   categorizeAcidity(-1);
   // "invalid pH level"
   categorizeAcidity(14.0000001);
   // "invalid pH level"
   categorizeAcidity(7);
   // "neutral"
   categorizeAcidity(2);
   // "acid"
   categorizeAcidity(9);
   // "base"
   ```

8. ### `introduceWarnerBro(name)`

   🚨 **This function should be completed with a [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement**

   #### Parameters

   - `name` - a string representing the name of one of the [Warner Bros characters](https://en.wikipedia.org/wiki/List_of_Animaniacs_characters#The_Warner_Brothers_and_their_Sister,_Dot).

   #### Return Value

   Depending on the name of the character, may return a different catch-phrase. `"yakko"` and `"wakko"` both say `"We're the warner brothers!"`, but `"dot"` says `"I'm cute~"`.

   If the input string is neither `"yakko"`, `"wakko"`, nor `"dot"`, then the function simply returns `"Goodnight everybody!"`.

   #### Examples

   ```js
   introduceWarnerBro("yakko");
   // "We're the warner brothers!"
   introduceWarnerBro("wakko");
   // "We're the warner brothers!"
   introduceWarnerBro("dot");
   // "I'm cute~"
   introduceWarnerBro("cody");
   // "Goodnight everybody!"
   introduceWarnerBro("minerva");
   // "Goodnight everybody!"
   ```

9. ### `recommendMovie(genre)`

   🚨 **This function should be completed with a [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement**

   #### Parameters

   - `genre` - a string representing a movie genre.

   #### Return Value

   A string representing a movie from the specified genre. Here are the genres:

   - action
   - comedy
   - horror
   - drama
   - musical
   - sci-fi

   #### Examples

   ```js
   recommendMovie("action");
   // "Die Hard"
   recommendMovie("comedy");
   // "The Big Lebowski"
   recommendMovie("random");
   // "Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi"
   ```
