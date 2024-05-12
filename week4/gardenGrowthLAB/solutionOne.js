// Constants for the circle's geometry and plant requirements
const PI = 3.1415;
const radius = 5; // Radius of the circular garden in meters
const area = PI * radius * radius; // Calculate the area of the circle
const spacePerPlant = 0.8; // Required space per plant in square meters
const maxCapacity = area / spacePerPlant; // Calculate maximum number of plants the garden can hold

// Initial number of plants
const initialPlants = 20;

// Calculate plant growth for week 1
let plantCountWeek1 = initialPlants * 2; // Plants double every week
if (plantCountWeek1 > maxCapacity * 0.8) {
  console.log("Week 1: Prune the plants. Too many plants!");
} else if (
  plantCountWeek1 >= maxCapacity * 0.5 &&
  plantCountWeek1 <= maxCapacity * 0.8
) {
  console.log(
    "Week 1: Monitor the plants. They are growing within acceptable limits."
  );
} else {
  console.log("Week 1: Plant more. There is room for more plants.");
}

// Calculate plant growth for week 2
let plantCountWeek2 = plantCountWeek1 * 2; // Continuing the doubling trend
if (plantCountWeek2 > maxCapacity * 0.8) {
  console.log("Week 2: Prune the plants. Too many plants!");
} else if (
  plantCountWeek2 >= maxCapacity * 0.5 &&
  plantCountWeek2 <= maxCapacity * 0.8
) {
  console.log(
    "Week 2: Monitor the plants. They are growing within acceptable limits."
  );
} else {
  console.log("Week 2: Plant more. There is room for more plants.");
}

// Calculate plant growth for week 3
let plantCountWeek3 = plantCountWeek2 * 2; // Continuing the doubling trend
if (plantCountWeek3 > maxCapacity * 0.8) {
  console.log("Week 3: Prune the plants. Too many plants!");
} else if (
  plantCountWeek3 >= maxCapacity * 0.5 &&
  plantCountWeek3 <= maxCapacity * 0.8
) {
  console.log(
    "Week 3: Monitor the plants. They are growing within acceptable limits."
  );
} else {
  console.log("Week 3: Plant more. There is room for more plants.");
}
