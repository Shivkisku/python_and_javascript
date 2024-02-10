// Dimensions of the Christmas tin
const tinLength = 12; // inches
const tinWidth = 9;   // inches
const tinHeight = 9;  // inches

// Dimensions of each cubed piece of fudge
const fudgeSideLength = 3; // inches

// Calculate the volume of the tin
const tinVolume = tinLength * tinWidth * tinHeight;

// Calculate the volume of each cubed piece of fudge
const fudgeVolume = Math.pow(fudgeSideLength, 3);

// Calculate the number of fudge pieces that can be packed into the tin
const numberOfFudgePieces = Math.floor(tinVolume / fudgeVolume);

// Print the result
console.log(`You can pack ${numberOfFudgePieces} cubed pieces of fudge into the Christmas tin.`);
