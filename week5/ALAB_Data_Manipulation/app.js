// Initial numbers
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Verify if all numbers are divisible by 5
const allDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`Are all numbers divisible by 5? ${allDivisibleBy5}`);

// Verify if the first number is larger than the last
const isFirstLarger = n1 > n4;
console.log(`Is the first number larger than the last? ${isFirstLarger}`);

// Arithmetic chain
const result = ((n2 - n1) * n3) % n4;
console.log(`Result of arithmetic chain: ${result}`);

// Check if any number is over 25
const anyOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`Are any numbers over 25? ${anyOver25}`);

// Constants
const distance = 1500;
const fuelBudget = 175;
const costPerGallon = 3;
const efficiencies = {
  55: 30,
  60: 28,
  75: 23,
};

// Calculate fuel needed and trip duration for each speed
for (const speed in efficiencies) {
  const mpg = efficiencies[speed];
  const gallonsNeeded = distance / mpg;
  const cost = gallonsNeeded * costPerGallon;
  const tripDuration = distance / speed;

  console.log(`At ${speed} mph:`);
  console.log(`- Gallons needed: ${gallonsNeeded}`);
  console.log(
    `- Will budget cover fuel expense? ${cost <= fuelBudget ? "Yes" : "No"}`
  );
  console.log(`- Trip duration: ${tripDuration} hours`);
}

// Adjust speed to stay within budget
let optimalSpeed = null;
for (const speed in efficiencies) {
  const mpg = efficiencies[speed];
  const gallonsNeeded = distance / mpg;
  const cost = gallonsNeeded * costPerGallon;

  if (cost <= fuelBudget) {
    optimalSpeed = speed;
    break; // Found the optimal speed, no need to continue the loop
  }
}

if (optimalSpeed) {
  console.log(`Optimal speed to stay within budget: ${optimalSpeed} mph`);
} else {
  console.log(`The budget is not enough for the entire trip.`);
}
