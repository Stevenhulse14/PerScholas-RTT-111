// drop(array, count)
// 🚨 Do not mutate the input array! 🚨

// Parameters
// array - Any JavaScript Array
// count - A positive integer number of elements to "drop" from the beginning of array
// Return Value
// A new Array containing the elements of array after the first count elements.

// Examples
// drop(["foo", "bar", "baz", "qux"], 2);
// // -> ["baz", "qux"]
// drop([1, 2, 3, 4, 5], 1);
// // -> [2, 3, 4, 5]
// drop([false, true, false, true], 3);
// // -> [true]
// drop([], 7);
// // -> []
// drop(["chicken", "waffle", "syrup", "cheese"], 5);
// // -> []

function drop(arr, count) {
  if (arr.length === 0 || arr.length <= count) {
    return [];
  }

  let new_arr = [];

  for (let abdoul = count; abdoul <= arr.length - 1; abdoul++) {
    let currentItem = arr[abdoul];
    new_arr.push(currentItem);
  }
  return new_arr;
}

console.log(drop(["foo", "bar", "baz", "qux"], 2));
