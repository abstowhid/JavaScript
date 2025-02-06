let str = 'Hello, World!';

// 1. String Length
console.log('Length of string:', str.length); // Output: 13

// 2. Accessing Characters (using index)
console.log('Character at index 0:', str[0]); // Output: H
console.log('Character at index 7:', str[7]); // Output: W

// 3. String Methods
console.log('Uppercase:', str.toUpperCase()); // Output: HELLO, WORLD!
console.log('Lowercase:', str.toLowerCase()); // Output: hello, world!
console.log('Substring (from index 7):', str.substring(7)); // Output: World!
console.log('Substring (from index 0 to 5):', str.substring(0, 5)); // Output: Hello

// 4. String Concatenation
let name = 'John';
let greeting = 'Hello, ' + name + '!';
console.log(greeting); // Output: Hello, John!

// 5. Template Literals (Interpolating variables in strings)
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is John and I am 25 years old.

// 6. Checking if String Includes a Substring
console.log("Includes 'World':", str.includes('World')); // Output: true
console.log("Includes 'JavaScript':", str.includes('JavaScript')); // Output: false

// 7. Finding the Index of a Substring
console.log("Index of 'World':", str.indexOf('World')); // Output: 7
console.log("Index of 'JavaScript':", str.indexOf('JavaScript')); // Output: -1 (not found)

// 8. Replacing Part of a String
let newStr = str.replace('World', 'JavaScript');
console.log('Replaced string:', newStr); // Output: Hello, JavaScript!

// 9. Splitting a String into an Array
let sentence = 'This is a test sentence.';
let words = sentence.split(' ');
console.log('Words array:', words); // Output: [ 'This', 'is', 'a', 'test', 'sentence.' ]
