console.log('Math.PI:', Math.PI); // Returns the value of PI
console.log('Math.E:', Math.E); // Returns Euler's number

// Rounding methods
console.log('Math.round(4.7):', Math.round(4.7)); // Rounds to nearest integer
console.log('Math.ceil(4.3):', Math.ceil(4.3)); // Rounds up
console.log('Math.floor(4.9):', Math.floor(4.9)); // Rounds down
console.log('Math.trunc(4.9):', Math.trunc(4.9)); // Removes decimal part

// Power and square root
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 2^3
console.log('Math.sqrt(25):', Math.sqrt(25)); // Square root of 25

// Absolute and sign
console.log('Math.abs(-5):', Math.abs(-5)); // Absolute value
console.log('Math.sign(-10):', Math.sign(-10)); // Returns -1, 0, or 1

// Trigonometric methods
console.log('Math.sin(Math.PI / 2):', Math.sin(Math.PI / 2)); // Sine of 90 degrees
console.log('Math.cos(0):', Math.cos(0)); // Cosine of 0 degrees
console.log('Math.tan(Math.PI / 4):', Math.tan(Math.PI / 4)); // Tangent of 45 degrees

// Logarithm and exponent
console.log('Math.log(10):', Math.log(10)); // Natural log of 10
console.log('Math.exp(2):', Math.exp(2)); // e^2

// Random number generation
console.log('Math.random():', Math.random()); // Returns a random number between 0 and 1
console.log('Random between 1 and 10:', Math.floor(Math.random() * 10) + 1);

// Min and Max
console.log('Math.min(3, 7, 2, 9):', Math.min(3, 7, 2, 9)); // Returns minimum value
console.log('Math.max(3, 7, 2, 9):', Math.max(3, 7, 2, 9)); // Returns maximum value

//! with variable

// Using different Math methods in JavaScript

let num = 4.7;
console.log('Math.PI:', Math.PI); // Returns the value of PI
console.log('Math.E:', Math.E); // Returns Euler's number

// Rounding methods
console.log('Math.round(num):', Math.round(num)); // Rounds to nearest integer
console.log('Math.ceil(num):', Math.ceil(num)); // Rounds up
console.log('Math.floor(num):', Math.floor(num)); // Rounds down
console.log('Math.trunc(num):', Math.trunc(num)); // Removes decimal part

// Power and square root
let base = 2,
    exponent = 3;
console.log('Math.pow(base, exponent):', Math.pow(base, exponent)); // 2^3
console.log('Math.sqrt(25):', Math.sqrt(25)); // Square root of 25

// Absolute and sign
let negativeNum = -5;
console.log('Math.abs(negativeNum):', Math.abs(negativeNum)); // Absolute value
console.log('Math.sign(negativeNum):', Math.sign(negativeNum)); // Returns -1, 0, or 1

// Trigonometric methods
let angle = Math.PI / 2;
console.log('Math.sin(angle):', Math.sin(angle)); // Sine of 90 degrees
console.log('Math.cos(0):', Math.cos(0)); // Cosine of 0 degrees
console.log('Math.tan(Math.PI / 4):', Math.tan(Math.PI / 4)); // Tangent of 45 degrees

// Logarithm and exponent
let value = 10;
console.log('Math.log(value):', Math.log(value)); // Natural log of 10
console.log('Math.exp(2):', Math.exp(2)); // e^2

// Random number generation
let randomNum = Math.random();
console.log('Math.random():', randomNum); // Returns a random number between 0 and 1
console.log('Random between 1 and 10:', Math.floor(randomNum * 10) + 1);

// Min and Max
let numbers = [3, 7, 2, 9];
console.log('Math.min(...numbers):', Math.min(...numbers)); // Returns minimum value
console.log('Math.max(...numbers):', Math.max(...numbers)); // Returns maximum value
