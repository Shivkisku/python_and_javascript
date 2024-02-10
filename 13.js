// Given conversion factor: 5 ounces = 140 grams
const ouncesPerGram = 5 / 140;

// Given weight in pounds
const pounds = 2;

// Convert pounds to ounces
const ounces = pounds * 16; // 1 pound = 16 ounces

// Calculate the equivalent weight in grams
const grams = ounces * ouncesPerGram;

// Print the result
console.log(`${pounds} pounds of ground meat is equal to ${grams.toFixed(2)} grams.`);
