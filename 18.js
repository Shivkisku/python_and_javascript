// Amount received by the first place winner
const firstPlaceWinnerAmount = 6000; // dollars

// Calculate the amount received by the second runner-up (¼ of what the winner won)
const secondRunnerUpAmount = 0.25 * firstPlaceWinnerAmount;

// Calculate the total amount of prize money distributed
const totalPrizeMoney = firstPlaceWinnerAmount + secondRunnerUpAmount;

// Print the result
console.log(`The total amount of prize money distributed is $${totalPrizeMoney.toFixed(2)}.`);
