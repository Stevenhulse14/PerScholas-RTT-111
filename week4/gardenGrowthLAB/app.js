function plantGrowthControl(weeks) {
  // Constants for the circle's geometry and plant requirements
  const PI = 3.1415; // Define Pi to approximate circle calculations
  const radius = 5; // Radius of the circular garden in meters
  const area = PI * radius * radius; // Calculate the area of the circle
  const initialPlants = 20; // Number of plants at the beginning
  const spacePerPlant = 0.8; // Required space per plant in square meters
  const maxCapacity = area / spacePerPlant; // Calculate maximum number of plants the garden can hold

  // Calculate the number of plants after the given number of weeks
  // Plants double in number every week
  const plantCount = initialPlants * Math.pow(2, weeks);

  // Decision making based on the capacity thresholds
  // Check if the plant count exceeds 80% of the garden's capacity
  if (plantCount > maxCapacity * 0.8) {
    console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
  }
  // Check if the plant count is between 50% and 80% of the garden's capacity
  else if (plantCount >= maxCapacity * 0.5 && plantCount <= maxCapacity * 0.8) {
    console.log(
      `Week ${weeks}: Monitor the plants. They are growing within acceptable limits.`
    );
  }
  // Check if the plant count is below 50% of the garden's capacity
  else {
    console.log(`Week ${weeks}: Plant more. There is room for more plants.`);
  }
}

// Example function calls to simulate plant growth for 1, 2, and 3 weeks
plantGrowthControl(1); // Simulate growth for 1 week
plantGrowthControl(2); // Simulate growth for 2 weeks
plantGrowthControl(3); // Simulate growth for 3 weeks

function calculateNeededSpace() {
  // Constants related to the plants and their spacing
  const initialPlants = 100; // Start with 100 plants
  const weeks = 10; // Duration of growth without pruning
  const spacePerPlant = 0.8; // Each plant requires 0.8 square meters

  // Manually calculated number of plants after 10 weeks (doubling each week)
  const plantCount = initialPlants * 1024; // 2^10 = 1024

  // Calculate the total required space for the plants after 10 weeks
  const requiredSpace = plantCount * spacePerPlant; // Total space needed based on plant count and space per plant

  // Constants for circle calculations
  const PI = 3.1415; // Approximation of Pi for area calculations

  // Manually calculate the new radius required for the new area
  let newRadius = 0;
  let increment = 0.01; // Incremental steps for approximating square root
  let currentArea = 0;

  // Incrementally find the square root by finding the radius that gets closest to the required area without exceeding it
  while (currentArea < requiredSpace) {
    newRadius += increment;
    currentArea = PI * newRadius * newRadius;
  }

  // Reduce the last increment since it exceeds the required area
  newRadius -= increment;

  // Output the results
  console.log(
    `After 10 weeks with 100 initial plants: Required space is ${requiredSpace} square meters, New radius is ${newRadius.toFixed(
      2
    )} meters.`
  );
}

calculateNeededSpace();

// Function to validate if the garden has enough capacity for the plants
function validateGardenCapacity() {
  // Initial number of plants
  const initialPlants = 100;
  // Space required by each plant
  const spacePerPlant = 0.8;
  // Constant for PI
  const PI = 3.1415;
  // Radius of the garden
  const radius = 5;
  // Area of the garden calculated using the formula for the area of a circle
  const area = PI * radius * radius;
  // Total space required for all plants
  const requiredSpace = initialPlants * spacePerPlant;

  // Try-Catch block to handle exceptions
  try {
    // If required space is more than the available area, throw an error
    if (requiredSpace > area) {
      throw new Error("Insufficient garden space for the number of plants.");
    }
    // If there is enough space, log a success message
    console.log(
      "The garden has sufficient space for the initial number of plants."
    );
  } catch (error) {
    // If an error is thrown, log the error message
    console.log(error.message);
  }
}
validateGardenCapacity();
