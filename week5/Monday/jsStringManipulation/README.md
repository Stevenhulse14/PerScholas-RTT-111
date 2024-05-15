1. ### `getFirstChar(string)`

   #### Parameters

   - `string` - Any JavaScript `String`

   #### Return Value

   The first character of `string`.

   #### Examples

   ```js
   getFirstChar("LearningFuze"); // -> "L"
   getFirstChar("paschal"); // -> "p"
   getFirstChar("HTML"); // -> "H"
   getFirstChar("code"); // -> "c"
   getFirstChar("String"); // -> "S"
   ```

2. ### `getLastChar(string)`

   #### Parameters

   - `string` - Any JavaScript `String`

   #### Return Value

   The _last_ character of `string`.

   #### Examples

   ```js
   getLastChar("LearningFuze"); // -> "e"
   getLastChar("paschal"); // -> "l"
   getLastChar("HTML"); // -> "L"
   getLastChar("code"); // -> "e"
   getLastChar("String"); // -> "g"
   ```

3. ### `capitalize(word)`

   #### Parameters

   - `word` - A single word as a JavaScript `String`

   #### Return Value

   The original `word`, but with its first character uppercased and the rest of its characters lowercased.

   #### Examples

   ```js
   capitalize("a"); // -> "A"
   capitalize("link"); // -> "Link"
   capitalize("tO"); // -> "To"
   capitalize("ThE"); // -> "The"
   capitalize("pAsT"); // -> "Past"
   ```

4. ### `isUpperCased(word)`

   #### Parameters

   - `word` - A single word as a JavaScript `String`

   #### Return Value

   A `Boolean` indicating whether or not all characters in `word` are **uppercased**.

   #### Examples

   ```js
   isUpperCased("LearningFuze"); // -> false
   isUpperCased("JavaScript"); // -> false
   isUpperCased("HTML"); // -> true
   isUpperCased("css"); // -> false
   isUpperCased("PHP"); // -> true
   ```

5. ### `isLowerCased(word)`

   #### Parameters

   - `word` - A single word as a JavaScript `String`

   #### Return Value

   A `Boolean` indicating whether or not all characters in `word` are **lowercased**.

   #### Examples

   ```js
   isLowerCased("LearningFuze"); // -> false
   isLowerCased("zip-ties"); // -> true
   isLowerCased("JavaScript"); // -> false
   isLowerCased("burgers"); // -> true
   isLowerCased("HTML"); // -> false
   ```

6. ### `isVowel(char)`

   #### Parameters

   - `char` - A single JavaScript `String` character

   #### Return Value

   A `Boolean` indicating whether or not `char` is a vowel. `isVowel` should handle both uppercase and lowercase characters.

   #### Examples

   ```js
   isVowel("L"); // -> false
   isVowel("f"); // -> false
   isVowel("Z"); // -> false
   isVowel("a"); // -> true
   isVowel("E"); // -> true
   isVowel("I"); // -> true
   isVowel("o"); // -> true
   isVowel("u"); // -> true
   ```

7. ### `getWords(string)`

   #### Parameters

   - `string` - A JavaScript `String` containing zero or more words, separated by spaces.

   #### Return Value

   An `Array` of JavaScript `String`. Each `String` is one of the words in the `string` parameter.

   #### Examples

   ```js
   getWords("LearningFuze");
   // -> ["LearningFuze"]
   getWords("Web Development");
   // -> ["Web", "Development"]
   getWords("Cascading Style Sheets");
   // -> ["Cascading", "Style", "Sheets"]
   getWords("European Computer Manufacturers Association");
   // -> ["European", "Computer", "Manufacturers", "Association"]
   getWords("");
   // -> []
   ```

8. ### `reverseWord(word)`

   🚨 **Do not use `String.prototype.split` for this problem.** 🚨

   #### Parameters

   - `word` - A single word as a JavaScript `String`

   #### Return Value

   A JavaScript `String` containing the characters of `word` in reverse order.

   #### Examples

   ```js
   reverseWord("foo"); // -> "oof"
   reverseWord("rab"); // -> "bar"
   reverseWord("LearningFuze"); // -> "ezuFgninraeL"
   reverseWord("tpircSavaJ"); // -> "JavaScript"
   reverseWord("racecar"); // -> "racecar"
   ```

9. ### `truncate(length, string)`

   Cuts `string` down to at most `length` characters long and appends an ellipsis (`...`).

   #### Parameters

   - `length` - an integral JavaScript `Number`
   - `string` - any JavaScript `String`

   #### Return Value

   - A shortened version of `string`, plus in an ellipsis.

   #### Examples

   ```js
   truncate(8, "All Code All Day"); // -> "All Code..."
   truncate(15, "HTML, CSS, JavaScript, React"); // -> "HTML, CSS, Java..."
   truncate(1, "React"); // -> "R..."
   truncate(3, "Angular"); // -> "Ang..."
   truncate(5, ""); // -> "..."
   truncate(20, "LearningFuze"); // -> "LearningFuze..."
   ```

10. ### `capitalizeWord(word)`

#### Parameters

- `word` - A single word as a JavaScript `String`

#### Return Value

Returns `word` with its first character uppercased and the rest of its characters lowercased. For this function, **JavaScript** is _always_ cased as **JavaScript**.

#### Examples

```js
capitalizeWord("broKeN"); // -> "Broken"
capitalizeWord("sEarCHinG"); // -> "Searching"
capitalizeWord("quEStiOn"); // -> "Question"
capitalizeWord("tHoUghTfUl"); // -> "Thoughtful"
capitalizeWord("jaVAsCrIPt"); // -> "JavaScript"
capitalizeWord("javaScript"); // -> "JavaScript"
capitalizeWord("JavascRipt"); // -> "JavaScript"
```

11. ### `ransomCase(string)`

#### Parameters

- `string` - any JavaScript `String`

#### Return Value

Returns `string` with every-other character uppercased.

#### Examples

```js
ransomCase("foo"); // -> "fOo"
ransomCase("QUUX"); // -> "qUuX"
ransomCase("WaldO"); // -> "wAlDo"
ransomCase("JavaScript"); // -> "jAvAsCrIpT"
ransomCase("LearningFuze"); // -> "lEaRnInGfUzE"
```

12. ### `capitalizeWords(string)`

#### Parameters

- `string` - any JavaScript `String`

#### Return Value

Returns `string` with every word capitalized.

#### Examples

```js
capitalizeWords("needs solution");
// -> "Needs Solution"
capitalizeWords("Add string manipulation practice.");
// -> "Add String Manipulation Practice."
capitalizeWords("aLl CoDe aLl DaY");
// -> "All Code All Day"
capitalizeWords("HTML, CSS, JavaScript, PHP, SQL");
// -> "Html, Css, Javascript, Php, Sql"
```

13. ### `numVowels(string)`

#### Parameters

- `string` - any JavaScript `String`

#### Return Value

The `Number` of vowel characters in `string`.

#### Examples

```js
numVowels("All Code All Day"); // -> 5
numVowels("HTML, CSS, JavaScript, React"); // -> 5
numVowels("React"); // -> 2
numVowels("Angular"); // -> 3
numVowels(""); // -> 0
numVowels("LearningFuze"); // -> 5
```

14. ### `firstChars(length, string)`

#### Parameters

- `length` - an integral JavaScript `Number`
- `string` - any JavaScript `String`

#### Return Value

The first `length` characters of `string`.

#### Examples

```js
firstChars(8, "All Code All Day"); // -> "All Code"
firstChars(15, "HTML, CSS, JavaScript, React"); // -> "HTML, CSS, Java"
firstChars(1, "React"); // -> "R"
firstChars(3, "Angular"); // -> "Ang"
firstChars(5, ""); // -> ""
firstChars(20, "LearningFuze"); // -> "LearningFuze"
```

15. ### `lastChars(length, string)`

#### Parameters

- `length` - an integral JavaScript `Number`
- `string` - any JavaScript `String`

#### Return Value

The last `length` characters of `string`.

#### Examples

```js
lastChars(8, "All Code All Day"); // -> " All Day"
lastChars(15, "HTML, CSS, JavaScript, React"); // -> "vaScript, React"
lastChars(1, "React"); // -> "t"
lastChars(3, "Angular"); // -> "lar"
lastChars(5, ""); // -> ""
lastChars(20, "LearningFuze"); // -> "LearningFuze"
```

16. ### `swapChars(firstIndex, secondIndex, string)`

#### Parameters

- `firstIndex` - an integral JavaScript `Number`
- `secondIndex` - an integral JavaScript `Number`
- `string` - any JavaScript `String`

#### Return Value

`string` with the characters at `firstIndex` and `secondIndex` swapped.

#### Examples

```js
swapChars(0, 1, "lodash"); // -> "oldash"
swapChars(0, 4, "React"); // -> "teacR"
swapChars(6, 7, "complete"); // -> "compleet"
swapChars(0, 8, "LearningFuze"); // -> "FearningLuze"
swapChars(11, 23, "HTML, CSS, JavaScript, React"); // -> "HTML, CSS, RavaScript, Jeact"
```

17. ### `isPalindromic(string)`

    #### Parameters

    - `string` - any JavaScript `String`

    #### Return Value

    A `Boolean` indicating whether or not `string` is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).

    #### Examples

    ```js
    isPalindromic("bob"); // -> true
    isPalindromic("alice"); // -> false
    isPalindromic("racecar"); // -> true
    isPalindromic("rasecar"); // -> false
    isPalindromic("taco cat"); // -> true
    isPalindromic("sam i am"); // -> false
    ```

18. ### `isAnagram(firstString, secondString)`

    #### Parameters

    - `firstString` - any JavaScript `String`
    - `secondString` - any JavaScript `String`

    #### Return Value

    A `Boolean` indicating whether or not `secondString` is an [anagram](https://en.wikipedia.org/wiki/Anagram) of `firstString`.

    #### Examples

    ```js
    isAnagram("restful", "fluster"); // -> true
    isAnagram("dormitory", "dirty room"); // -> true
    isAnagram("roses", "horse"); // -> false
    isAnagram("debit card", "bad credit"); // -> true
    isAnagram("nearby there", "nearly three"); // -> false
    isAnagram("school master", "the classroom"); // -> true
    isAnagram("ludicrous", "ridiculous"); // -> false
    isAnagram("anagram", "nag a ram"); // -> true
    isAnagram("anagram", "nag a ram"); // -> true
    isAnagram("red dad", "rad ede"); // -> false
    ```

19. ### `reverseWords(string)`

    #### Parameters

    - `string` - any JavaScript `String`

    #### Return Value

    - A version of `String` with every character of each word reversed, but the words in their original order.

    #### Examples

    ```js
    reverseWords("All Code All Day"); // -> "llA edoC llA yaD"
    reverseWords("What is unit testing?"); // -> "tahW si tinu ?gnitset"
    reverseWords("follow your passion"); // -> "wollof ruoy noissap"
    reverseWords("Hello, how are you?"); // -> ",olleH woh era ?uoy"
    ```

20. ### `titleCase(title)`

    #### Parameters

    - `title` - A JavaScript `String` representing a book title

    #### Return Value

    The original `title`, but with [APA Title Case Style](https://blog.apastyle.org/apastyle/2012/03/title-case-and-sentence-case-capitalization-in-apa-style.html) applied.

    #### Rules Summary

    **NOTE:** Your solution should implement these rules and assume nothing else about your input strings. **_Any_** book title should work.

    - Capitalize the first word of the title and of any subtitle.
    - Capitalize all “major” words (nouns, verbs, adjectives, adverbs, and pronouns) in the title, including the second part of hyphenated major words (e.g., `Self-Report` not `Self-report`).
    - Capitalize all words of four letters or more.

    This boils down to using lowercase only for “minor” words of three letters or fewer, namely, for conjunctions (**words like and, or, nor, and but**), articles (**the words a, an, and the**), and prepositions (**words like as, at, by, for, in, of, on, per, and to**), as long as they aren’t the first word in a title or subtitle.

    #### Special Cases

    **You many _only_ "hard code" these special cases in your solution, aside from the "minor" words listed above.**

    - **JavaScript** is always cased **JavaScript**.
    - **API** is a "known" acronym.

    #### Examples

    ```js
    titleCase("composing software");
    // -> "Composing Software"
    titleCase("high performance browser networking");
    // -> "High Performance Browser Networking"
    titleCase("node.js in action");
    // -> "Node.js in Action"
    titleCase("professional JavaScript for web developers");
    // -> "Professional JavaScript for Web Developers"
    titleCase("secrets of the javascript ninja");
    // -> "Secrets of the JavaScript Ninja"
    titleCase("web audio api");
    // -> "Web Audio API"
    titleCase("javascript: the definitive guide");
    // -> "JavaScript: The Definitive Guide"
    titleCase("speaking Javascript: an in-depth guide for programmers");
    // -> "Speaking JavaScript: An In-Depth Guide for Programmers"
    ```
