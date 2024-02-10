// Given scale: 1 inch represents 20 miles
const scale = 20;

// Given map distance between two towns: 6 1/5 inches
const mapDistanceInches = 6 + 1/5;

// Calculate the actual distance in miles
const actualDistanceMiles = mapDistanceInches * scale;

// Print the result
console.log(`The actual distance between the two towns is ${actualDistanceMiles.toFixed(2)} miles.`);
