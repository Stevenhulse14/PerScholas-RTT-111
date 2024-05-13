1. ### `head(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `head`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   The first element of `array`.

   #### Examples

   ```js
   head(["foo", "bar", "baz"]); // -> "foo"
   head([1, 2, 3, 4, 5]); // -> 1
   head([false, true, false, true]); // -> false
   head([]); // -> undefined
   ```

2. ### `last(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `last`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   The last element of `array`.

   #### Examples

   ```js
   last(["foo", "bar", "baz"]); // -> "baz"
   last([1, 2, 3, 4, 5]); // -> 5
   last([false, true, false, true]); // -> true
   last([]); // -> undefined
   ```

3. ### `tail(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `tail`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   A new array containing all elements of `array` after the first.

   #### Examples

   ```js
   tail(["foo", "bar", "baz"]); // -> ["bar", "baz"]
   tail([1, 2, 3, 4, 5, 6]); // -> [2, 3, 4, 5, 6]
   tail([true, false, false, true]); // -> [false, false, true]
   tail([]); // -> []
   ```

4. ### `initial(array)`

   🚨 **Do not use `slice()`, `splice()`, `pop()`, or `shift()` in your implementation of `initial`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   A new array containing all elements of `array` except the last.

   #### Examples

   ```js
   initial(["foo", "bar", "baz"]); // -> ["foo", "bar"]
   initial([1, 2, 3, 4, 5, 6]); // -> [1, 2, 3, 4, 5]
   initial([true, false, false, true]); // -> [true, false, false]
   initial([]); // -> []
   ```

5. ### `reverse(array)`

   **Do not use `Array.prototype.reverse()` in your implementation of `reverse`.**

   #### Parameters

   - `array` - Any JavaScript `Array`

   #### Return Value

   A new array containing all elements of `array` in reverse order.

   #### Examples

   ```js
   reverse(["foo", "bar", "baz"]); // -> ["baz", "bar", "foo"]
   reverse([1, 2, 3, 4, 5]); // -> [5, 4, 3, 2, 1]
   reverse([false, true, false, true]); // -> [true, false, true, false]
   reverse([]); // -> []
   ```

6. ### `drop(array, count)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `count` - A positive integer `number` of elements to "drop" from the beginning of `array`

   #### Return Value

   A new `Array` containing the elements of `array` after the first `count` elements.

   #### Examples

   ```js
   drop(["foo", "bar", "baz", "qux"], 2);
   // -> ["baz", "qux"]
   drop([1, 2, 3, 4, 5], 1);
   // -> [2, 3, 4, 5]
   drop([false, true, false, true], 3);
   // -> [true]
   drop([], 7);
   // -> []
   drop(["chicken", "waffle", "syrup", "cheese"], 5);
   // -> []
   ```

7. ### `includes(array, value)` 🚨

   🚨 **Do not use `Array.prototype.includes` in your implementation.** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `value` - The value to search for in `array`

   #### Return Value

   A `Boolean` indicating the presence of `value` at any index of `array`.

   #### Examples

   ```js
   includes(["foo", "bar", "baz", "qux"], "baz");
   // -> true
   includes(["foo", "bar", "baz", "qux"], "corge");
   // -> false
   includes([1, 2, 3, 4, 5], 2);
   // -> true
   includes([1, 2, 3, 4, 5], 7);
   // -> false
   includes([false, true, false, true], false);
   // -> true
   includes([false, true, false, true], null);
   // -> false
   includes([], true);
   // -> false
   includes([], "foo");
   // -> false
   includes([], 7);
   // -> false
   ```

8. ### `takeRight(array, count)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `count` - A positive integer `number` of elements to "take" from the end of `array`.

   #### Return Value

   A new `Array` containing the last `count` elements of `array`. If the `count` is larger than the length of the array, then a shallow copy of the entire array is returned.

   #### Examples

   ```js
   takeRight(["foo", "bar", "baz", "qux"], 2);
   // -> ["baz", "qux"]
   takeRight([1, 2, 3, 4, 5], 1);
   // -> [5]
   takeRight([false, true, false, true], 3);
   // -> [true, false, true]
   takeRight([], 7);
   // -> []
   takeRight([4, 5, 6, 7], 5);
   // -> [4, 5, 6, 7]
   ```

9. ### `dropRight(array, count)`

   🚨 **Do not mutate the input array!** 🚨

   #### Parameters

   - `array` - Any JavaScript `Array`
   - `count` - A positive integer `number` of elements to "drop" from the end of `array`.

   #### Return Value

   A new `Array` containing the elements of `array` before the last `count` elements.

   #### Examples

   ```js
   dropRight(["foo", "bar", "baz", "qux"], 2);
   // -> ["foo", "bar"]
   dropRight([1, 2, 3, 4, 5], 1);
   // -> [1, 2, 3, 4]
   dropRight([false, true, false, true], 3);
   // -> [false]
   dropRight([], 7);
   // -> []
   dropRight(["chicken", "waffle", "syrup", "cheese"], 5);
   // -> []
   ```

10. ### `chunk(array, size)`

🚨 **Do not mutate the input array!** 🚨

#### Parameters

- `array` - Any JavaScript `Array`
- `size` - A positive integer `number` indicating the desired "chunk" size.

#### Return Value

A new `Array` of `Arrays`. Each sub-`Array` has a length equal to `size`. Remaining elements are gathered into a final sub-`Array`.

#### OPTIONAL CHALLENGE (optional: don't do it this way if it takes a long time to solve)

**Do not use `Array.prototype.slice` in your implementation.**

#### Examples

```js
chunk(["foo", "bar", "baz", "qux"], 2);
// -> [["foo", "bar"], ["baz", "qux"]]
chunk([1, 2, 3, 4, 5], 1);
// -> [[1], [2], [3], [4], [5]]
chunk([false, true, false, true], 3);
// -> [[false, true, false], [true]]
chunk([], 7);
// -> []
```

11. ### `equal(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    A `boolean` indicating whether or not `first` and `second` are equal to each other, index-for-index.

    #### Examples

    ```js
    equal(["foo", "bar", "baz"], ["foo", "bar", "baz"]);
    // -> true
    equal(["foo", "bar", "baz"], ["foo", "bar", "qux"]);
    // -> false
    equal([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
    // -> true
    equal([1, 2, 3, 4, 5], [1, 2, 3, 3, 5]);
    // -> false
    equal([false, true, false, true], [false, true, false, true]);
    // -> true
    equal([false, true, false, true], [true, false, true, false]);
    // -> false
    equal([], []);
    // -> true
    ```

12. ### `flatten(array)` 🚨

    🚨 **Do not use `Array.prototype.flat` in your implementation.**

    #### Parameters

    - `array` - Any JavaScript `Array`

    #### Return Value

    A new `Array` with any direct child `Arrays` unwrapped. This function should only "flatten" `array` by one level.

    #### Examples

    ```js
    flatten([
      ["foo", "bar"],
      ["baz", "qux"],
    ]);
    // -> ["foo", "bar", "baz", "qux"]
    flatten([[1], [2], 3, 4, [5]]);
    // -> [1, 2, 3, 4, 5]
    flatten([false, [true, [false]], [true]]);
    // -> [false, true, [false], true]
    flatten([]);
    // -> []
    ```

    #### Hint

    Test whether a value is an `Array` with [`Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).

13. ### `zip(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    An `Array` of `Arrays`. Each sub-`Array` is a pair containing an element from `first`, and an element from `second`, each from the same index of their respective source `Array`. The "zipped" result is only as long as the shorter of `first` and `second`.

    #### Examples

    ```js
    zip(["name", "course", "grade"], ["Cody", "CSS", 9001]);
    // -> [["name", "Cody"], ["course", "CSS"], ["grade", 9001]]
    zip(["dog", "lion", "hawk", "tiger"], ["cat", "lamb", "dove"]);
    // -> [["dog", "cat"], ["lion", "lamb"], ["hawk", "dove"]]
    zip([1, 3, 5], [2, 4, 6, 8]);
    // -> [[1, 2], [3, 4], [5, 6]]
    zip(["l", "e", "a", "r", "n", "i"], ["n", "g", "f", "u", "z", "e"]);
    // -> [["l", "n"], ["e", "g"], ["a", "f"], ["r", "u"], ["n", "z"], ["i", "e"]]
    zip(
      [true, false, false, true, null, false, true],
      ["Tony", undefined, undefined, "Jeeves", "Pepper", undefined, "Nick"]
    );
    // -> [[true, "Tony"], [false, undefined], [false, undefined], [true, "Jeeves"], [null, "Pepper"], [false, undefined], [true, "Nick"]]
    ```

14. ### `unique(array)`

    #### Parameters

    - `array` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing only the unique elements of `array`, in the order they first appear in `array`.

    #### Examples

    ```js
    unique(["foo", "bar", "baz", "qux", "bar", "qux", "corge", "baz"]);
    // -> ["foo", "bar", "baz", "qux", "corge"]
    unique([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
    // -> [1, 3, 2, 5, 4]
    unique([false, true, false, true]);
    // -> [false, true]
    unique([]);
    // -> []
    ```

15. ### `difference(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) between `first` and `second`. That is, elements are included if they are found in one `Array`, but not the other. The result values are unique and their order is determined by the order they occur.

    #### Examples

    ```js
    difference([2, 1], [2, 3]);
    // -> [1, 3]
    difference(["html", "css", "javascript"], ["php", "css", "sql"]);
    // -> ["html", "javascript", "php", "sql"]
    difference(
      ["a", "link", "to", "the", "past"],
      ["the", "adventure", "of", "link"]
    );
    // -> ["a", "to", "past", "adventure", "of"]
    ```

16. ### `intersection(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing **unique** values found in both `first` and `second`. The order of result values is determined by the order they occur.

    #### Examples

    ```js
    intersection([2, 1], [2, 3]);
    // -> [2]
    intersection(["html", "css", "javascript"], ["php", "css", "sql"]);
    // -> ["css"]
    intersection(
      ["a", "link", "to", "the", "past"],
      ["the", "adventure", "of", "link"]
    );
    // -> ["link", "the"]
    ```

17. ### `union(first, second)`

    #### Parameters

    - `first` - Any JavaScript `Array`
    - `second` - Any JavaScript `Array`

    #### Return Value

    A new `Array` containing **unique** values from both `first` and `second` in the order they appear.

    #### Examples

    ```js
    union([2, 1], [2, 3]);
    // -> [2, 1, 3]
    union(["html", "css", "javascript"], ["php", "css", "sql"]);
    // -> ["html", "css", "javascript", "php", "sql"]
    union(
      ["a", "link", "to", "the", "past"],
      ["the", "adventure", "of", "link"]
    );
    // -> ["a", "link", "to", "the", "past", "adventure", "of"]
    ```
