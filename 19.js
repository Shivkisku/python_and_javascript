// Given values
const horizontalDistance = 120; // feet
const treeHeight = 50; // feet

// Calculate the distance from your head to the top of the tree
const distanceToTopOfTree = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(treeHeight, 2));

// Print the result
console.log(`The distance from your head to the top of the tree is approximately ${distanceToTopOfTree.toFixed(2)} feet.`);
