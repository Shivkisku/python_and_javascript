// Define the binary operation *
function binaryOperation(a, b, c, d) {
    return [a + c, b + d];
}

// Commutativity
function isCommutative(a, b, c, d) {
    return binaryOperation(a, b, c, d).toString() === binaryOperation(c, d, a, b).toString();
}

// Associativity
function isAssociative(a, b, c, d, e, f) {
    const leftSide = binaryOperation(a, b, binaryOperation(c, d, e, f)[0], binaryOperation(c, d, e, f)[1]);
    const rightSide = binaryOperation(binaryOperation(a, b, c, d)[0], binaryOperation(a, b, c, d)[1], e, f);
    return leftSide.toString() === rightSide.toString();
}

// Identity Element
function findIdentityElement(a, b) {
    const identityElement = [0, 0];
    return (
        binaryOperation(a, b, identityElement[0], identityElement[1]).toString() === [a, b].toString() &&
        binaryOperation(identityElement[0], identityElement[1], a, b).toString() === [a, b].toString()
    );
}

// Example usage
const a = 2, b = 3, c = 4, d = 5, e = 6, f = 7;

// Commutativity check
console.log("Commutativity:", isCommutative(a, b, c, d));

// Associativity check
console.log("Associativity:", isAssociative(a, b, c, d, e, f));

// Identity Element check
console.log("Identity Element:", findIdentityElement(a, b));
