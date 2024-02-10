// Define the function f(x)
function f(x) {
    return 4 * x + 3;
}

// Check if f is injective (one-to-one)
function isInjective() {
    const values = new Set();
    for (let x = 0; x <= 1000; x++) {
        const result = f(x);
        if (values.has(result)) {
            return false;
        }
        values.add(result);
    }
    return true;
}

// Check if f is surjective (onto)
function isSurjective() {
    const rangeValues = new Set();
    for (let x = 0; x <= 1000; x++) {
        rangeValues.add(f(x));
    }

    for (let y = 3; y <= 4003; y++) {
        if (!rangeValues.has(y)) {
            return false;
        }
    }
    return true;
}

// Find the inverse function f^{-1}(y)
function inverseFunction(y) {
    return (y - 3) / 4;
}

// Check if f is invertible
function isBijective() {
    return isInjective() && isSurjective();
}

// Example usage
console.log("Injective:", isInjective());
console.log("Surjective:", isSurjective());

if (isBijective()) {
    console.log("f is invertible.");

    // Find the inverse for a specific value of y
    const yValue = 19;
    const inverseResult = inverseFunction(yValue);
    console.log(`Inverse of ${yValue}:`, inverseResult);
} else {
    console.log("f is not invertible.");
}
