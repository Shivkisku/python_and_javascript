// Given data
const finalCost = 306;
const discount1 = 0.1;
const discount2 = 0.15;

// Solve for the original cost (x)
const originalCost = finalCost / (1 - discount1) / (1 - discount2);

// Print the result
console.log("Original Cost:", originalCost);
