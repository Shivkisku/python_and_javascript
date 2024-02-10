// Dimensions of the kitchen floor
const floorWidthFeet = 12;  // feet
const floorLengthFeet = 20; // feet

// Cost of the tile per square yard
const tileCostPerSquareYard = 8.91; // dollars

// Convert dimensions to square yards
const floorAreaSquareYards = (floorWidthFeet * floorLengthFeet) / 9;

// Calculate the total cost of tiling the floor
const totalCost = floorAreaSquareYards * tileCostPerSquareYard;

// Print the result
console.log(`The cost to tile the kitchen floor is $${totalCost.toFixed(2)}.`);
