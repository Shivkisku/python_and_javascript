// Define the function f(x)
function f(x) {
    return (x - 2) / (x - 3);
}

// Check if f is injective (one-to-one)
function isInjective() {
    for (let x1 = -Infinity; x1 < Infinity; x1 += 0.1) {
        for (let x2 = -Infinity; x2 < Infinity; x2 += 0.1) {
            if (x1 !== x2 && f(x1) === f(x2)) {
                return false;
            }
        }
    }
    return true;
}

// Check if f is surjective (onto)
function isSurjective() {
    for (let y = -Infinity; y < Infinity; y += 0.1) {
        let foundPreimage = false;
        for (let x = -Infinity; x < Infinity; x += 0.1) {
            if (f(x) === y) {
                foundPreimage = true;
                break;
            }
        }
        if (!foundPreimage) {
            return false;
        }
    }
    return true;
}

// Check if f is one-one and onto
const oneToOne = isInjective();
const onto = isSurjective();

// Print the results
console.log("One-to-One (Injective):", oneToOne);
console.log("Onto (Surjective):", onto);
