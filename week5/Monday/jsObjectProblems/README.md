1.  ### `getValue(object, key)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `getValue()`.**

    #### Parameters

    - `object` - Any JavaScript `Object`
    - `key` - A JavaScript `String`

    #### Return Value

    The value in `object` found at the `key` property.

    #### Examples

    ```js
    const dave = { firstName: "David", lastName: "Thomas" };
    getValue(dave, "firstName"); // -> "David"
    getValue(dave, "lastName"); // -> "Thomas"

    const learningFuze = { latitude: 33.6349, longitude: 117.7405 };
    getValue(learningFuze, "latitude"); // -> 33.6349
    getValue(learningFuze, "longitude"); // -> 117.7405

    const tim = { name: "Tim", language: "JavaScript" };
    getValue(tim, "age"); // -> undefined
    getValue(tim, "yearsExperience"); // -> undefined
    ```

2.  ### `setValue(object, key, value)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `setValue()`.**

    #### Parameters

    - `object` - Any JavaScript `Object`
    - `key` - A JavaScript `String`
    - `value` - Any JavaScript value

    #### Return Value

    This function does not return anything (`undefined`)

    #### Examples

    ```js
    const dave = { firstName: "David" };
    setValue(dave, "lastName", "Thomas");
    console.log(dave); // { firstName: "David", lastName: "Thomas" }

    const learningFuze = { latitude: 33.6349 };
    setValue(learningFuze, "attitude", "sanguine");
    console.log(learningFuze); // { latitude: 33.6349, attitude: "sanguine" }

    const tim = { name: "Tim", language: "JavaScript" };
    setValue(tim, "language", "PHP");
    console.log(tim); // { name: "Tim", language: "PHP" }
    ```

3.  ### `getKeys(object)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `getKeys()`.**

    #### Parameters

    - `object` - Any JavaScript `Object`

    #### Return Value

    An `Array` of the `object`'s property keys.

    #### Examples

    ```js
    const dave = {
      firstName: "David",
      lastName: "Thomas",
    };
    getKeys(dave); // -> ["firstName", "lastName"]

    const learningfuze = {
      latitude: 33.6349,
      attitude: "sanguine",
      longitude: 117.7405,
    };
    getKeys(learningFuze); // -> ["latitude", "attitude", "longitude"]

    const tim = {};
    getKeys(tim); // -> []
    ```

4.  ### `getValues(object)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `getValues()`.**

    #### Parameters

    - `object` - Any JavaScript `Object`

    #### Return Value

    An `Array` of the `object`'s property values.

    #### Examples

    ```js
    const dave = {
      firstName: "David",
      lastName: "Thomas",
    };
    getValues(dave); // -> ["David", "Thomas"]

    const learningfuze = {
      latitude: 33.6349,
      attitude: "sanguine",
      longitude: 117.7405,
    };
    getValues(learningFuze); // -> [33.6349, "sanguine", 117.7405]

    const tim = {};
    getValues(tim); // -> []
    ```

5.  ### `toObject(keyValuePair)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `toObject()`.**

    **Note: In order to correctly type your parameter, you can utilize a [tuple type](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)**

    #### Parameters

        - `keyValuePair` - An `Array` containing two elements; a `String` key and any other JavaScript value.

    #### Return Value

        - An `Object` with one property consisting of the passed `keyValuePair`.

    #### Examples

    ```js
    toObject(["firstName", "David"]); // -> { firstName: "David" }
    toObject(["isCool", true]); // -> { isCool: true }
    toObject(["employer", "LearningFuze"]); // -> { employer: "LearningFuze" }
    ```

6.  ### `omit(source, keys)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `omit()`.**

    The opposite of `pick`; this method creates an object composed of properties of `source` not listed in `keys`.

    #### Parameters

    - `source` - Any JavaScript `Object`
    - `keys` - An array of JavaScript `String`s

    #### Return Value

    A new `Object` containing all of the properties of `source` that _are not_ listed in `keys`. If a key is listed in `keys`, then it should not be included in the new `Object`.

    #### Examples

    ```js
    omit({ foo: 1, bar: 2, baz: 3 }, ["foo", "baz"]); // -> { bar: 2 }
    omit({ qux: 4, corge: 5 }, ["bar", "grault"]); // -> { qux: 4, corge: 5 }
    omit({}, ["foo", "bar", "baz"]); // -> {}
    ```

7.  ### `invert(source)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `invert()`.**

    Creates an object composed of the inverted keys and values of `source`.

    #### Parameters

    - `source` - Any JavaScript `Object`

    #### Return Value

    A new `Object` containing all properties of `source`, but with the keys and values inverted.

    #### Examples

    ```js
    invert({ age: NaN, occupation: "programmer", language: "JavaScript" });
    // -> { NaN: 'age', programmer: 'occupation', JavaScript: 'language' }
    invert({ accountId: "axbxcx", amount: 1000, type: "withdrawal" });
    // -> { axbxcx: 'accountId', '1000': 'amount', withdrawal: 'type' }
    invert({ name: "ada", type: "cat", breed: "bengal", age: 1.5 });
    // -> { ada: 'name', cat: 'type', bengal: 'breed', '1.5': 'age' }
    invert({});
    // -> {}
    ```

8.  ### `defaults(target, source)`

    **🚨 Do not use `Object` methods (eg. `Object.keys`) in your implementation of `defaults()`.**

    Assigns properties of `source` object to the `target` object for all properties that are not defined on `target`.

    #### Parameters

    - `target` - Any JavaScript `Object`
    - `source` - Any JavaScript `Object`

    #### Return Value

    This function does not return anything, but it does modify `target`.

    #### Examples

    ```js
    const target = {};
    const source = {
      foo: 1,
      bar: 2,
      baz: 3,
    };
    defaults(target, source);
    console.log(target); // -> { foo: 1, bar: 2, baz: 3 }

    const target = {
      foo: 1,
      baz: 3,
    };
    const source = {
      bar: 2,
    };
    defaults(target, source);
    console.log(target); // -> { foo: 1, bar: 2, baz: 3 }

    const target = {
      foo: 1,
      baz: 3,
    };
    const source = {
      foo: 4,
      bar: 2,
      baz: 5,
    };
    defaults(target, source);
    console.log(target); // -> { foo: 1, bar: 2, baz: 3 }

    const target = {
      foo: 1,
      baz: 3,
    };
    const source = {};
    defaults(target, source);
    console.log(target); // -> { foo: 1, baz: 3 }
    ```
