// Dimensions of the flower bed
const flowerBedLengthYards = 6; // yards
const flowerBedWidthYards = 1;  // yard

// Cost of edging per 12-inch stone
const costPerStone = 2.32; // dollars

// Calculate the total length of edging required
const perimeterYards = 2 * (flowerBedLengthYards + flowerBedWidthYards);

// Convert the total length from yards to inches
const perimeterInches = perimeterYards * 36; // 1 yard = 36 inches

// Calculate the number of 12-inch stones needed
const stonesNeeded = perimeterInches / 12;

// Calculate the total cost of edging
const totalCost = costPerStone * stonesNeeded;

// Print the result
console.log(`The cost of edging for your flower bed is $${totalCost.toFixed(2)}.`);
