// Given speeds
const speedOutbound = 10; // miles per hour
const speedReturn = 8;   // miles per hour

// Calculate the average rate for the round trip
const averageRate = (2 * speedOutbound * speedReturn) / (speedOutbound + speedReturn);

// Print the result
console.log(`The cyclist's average rate for the round trip is ${averageRate.toFixed(2)} miles per hour.`);
