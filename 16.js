// Set up the equations
// Equation 1: S = 2B
// Equation 2: S - B = 15

// Given difference in ages
const ageDifference = 15;

// Solve for Sarah's age (S) and her youngest brother's age (B)
for (let B = 1; B <= 100; B++) {
    const S = 2 * B;

    // Check if the age difference condition is satisfied
    if (S - B === ageDifference) {
        // Print the result
        console.log(`Sarah's youngest brother is ${B} years old.`);
        break; // Exit the loop once a solution is found
    }
}
