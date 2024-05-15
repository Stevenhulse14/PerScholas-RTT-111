function isIrrational(num) {
  if (typeof num !== "number" || isNaN(num) || !isFinite(num)) {
    return false; // Not a valid number
  }

  const sqrt = Math.sqrt(num);
  return sqrt !== Math.floor(sqrt);
}

// Examples:
console.log(isIrrational(2)); // true because it's a perfect square (2 * 2)
console.log(isIrrational(Math.sqrt(2))); // true, sqrt(2) is irrational
console.log(isIrrational(Math.PI)); // false by this method, but PI is actually irrational
console.log(Math.PI !== 3.1415);
console.log(Math.sqrt(2) !== Math.floor(Math.sqrt(2)));
