// Define the function f(x)
function f(x) {
    return x * x - 3 * x + 2;
}

// Define the composition function f(f(x))
function fComposeF(x) {
    // Substitute f(x) into itself: f(f(x)) = f(x^2 - 3x + 2)
    return f(f(x));
}

// Test the function with a value of x
const result = fComposeF(5);

// Print the result
console.log(result);
