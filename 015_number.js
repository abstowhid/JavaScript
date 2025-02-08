let num1 = 42;
let num2 = 3.14159;
let num3 = -123.456;
let num4 = Number('123'); // Converting a string to a number

// Using Number methods
console.log(num1.toFixed(2)); // 42.00 - Converts number to a string, rounding to 2 decimal places
console.log(num2.toPrecision(4)); // 3.142 - Formats the number to 4 significant digits
console.log(num3.toExponential(2)); // -1.23e+2 - Converts number to exponential notation with 2 decimal places
console.log(num4.toString(16)); // '7b' - Converts number to a string in base 16 (hexadecimal)

// Checking if a value is a number
console.log(Number.isInteger(num1)); // true - Checks if the value is an integer
console.log(Number.isFinite(num2)); // true - Checks if the value is a finite number
console.log(Number.isNaN(num4)); // false - Checks if the value is NaN (Not-a-Number)

// Parsing numbers from strings
console.log(Number.parseInt('123.45')); // 123 - Parses a string and returns an integer
console.log(Number.parseFloat('123.45')); // 123.45 - Parses a string and returns a floating-point number

// Number properties
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 - Largest possible number in JavaScript
console.log(Number.MIN_VALUE); // 5e-324 - Smallest positive number in JavaScript
console.log(Number.POSITIVE_INFINITY); // Infinity - Represents positive infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity - Represents negative infinity
console.log(Number.NaN); // NaN - Represents "Not-a-Number"

// Example of NaN
let invalidNum = Number('abc');
console.log(invalidNum); // NaN - Result of trying to convert a non-numeric string to a number
console.log(Number.isNaN(invalidNum)); // true - Checks if the value is NaN
