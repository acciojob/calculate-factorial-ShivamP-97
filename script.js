//your JS code here. If required.
let num = parseInt(prompt("Enter a number:"));

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

let fact = factorial(num);

alert("The factorial of " + num + " is " + fact);
