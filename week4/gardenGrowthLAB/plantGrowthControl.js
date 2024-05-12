// Constants for the circle's geometry and plant requirements

// Define Pi to approximate circle calculations
const PI = 3.1415;
// Radius of the circular garden in meters
const radius = 5;
// Calculate the area of the circle
const area = PI * radius * radius;
// Number of plants at the beginning
const initialPlants = 20;
// Required space per plant in square meters
const spacePerPlant = 0.8;
// Calculate maximum number of plants the garden can hold
const maxCapacity = area / spacePerPlant;

function plantGrowthControl(weeks) {
  // Calculate the number of plants after the given number of weeks
  console.log();
  const plantCount = initialPlants * Math.pow(2, weeks);
  // Check if the plant count exceeds 80% of the garden's capacity
  if (plantCount > maxCapacity * 0.8) {
    console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
    // Check if the plant count is between 50% and 80% of the garden's capacity
  } else if (
    plantCount >= maxCapacity * 0.5 &&
    plantCount <= maxCapacity * 0.8
  ) {
    console.log(
      `Week ${weeks}: Monitor the plants. They are growing within acceptable limits.`
    );
  } else {
    console.log(`Week ${weeks}: Plant more. There is room for more plants.`);
  }
}
// Plants double in number every weekconst

// Decision making based on the capacity thresholds

// Example function calls to simulate plant growth for 1, 2, and 3 weeks
// Simulate growth for 1 week
plantGrowthControl(1);
// Simulate growth for 2 weeks
plantGrowthControl(2);
// Simulate growth for 3 weeks
plantGrowthControl(3);
