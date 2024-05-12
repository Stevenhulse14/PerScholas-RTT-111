const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const initialPlants = 20;
const spacePerPlant = 0.8;
const maxCapacity = area / spacePerPlant;
// PC = PlantCount
const eightyPercent = (PC) => PC > maxCapacity * spacePerPlant;
const fifthyToEigthy = (PC) =>
  PC >= maxCapacity * 0.5 && PC <= maxCapacity * 0.8;

function plantGrowthControl(weeks) {
  const plantCount = initialPlants * Math.pow(2, weeks);

  if (eightyPercent(plantCount)) {
    console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
  } else if (fifthyToEigthy(plantCount)) {
    console.log(
      `Week ${weeks}: Monitor the plants. They are growing within acceptable limits.`
    );
  } else {
    console.log(`Week ${weeks}: Plant more. There is room for more plants.`);
  }
}

plantGrowthControl(1); // Simulate growth for 1 week
plantGrowthControl(2); // Simulate growth for 2 weeks
plantGrowthControl(3); // Simulate growth for 3 weeks
