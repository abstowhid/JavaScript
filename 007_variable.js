// Declaring variables using var, let, and const

// 'var' is function-scoped and can be redeclared(both yes re-declare, yes re-assign)
var name = 'Alice';
var name = 'Bob'; // No error, but not recommended
console.log(name); // Output: Bob

// 'let' is block-scoped and cannot be redeclared in the same scope(no re-declare,yes re-assign,)
let age = 25;
age = 26; // Allowed
console.log(age); // Output: 26

// 'const' is also block-scoped but cannot be reassigned(no re-declare, no-reassign)
const country = 'USA';
// country = "Canada"; // This will throw an error
console.log(country); // Output: USA

// Different data types ( we assign in variable)
let number = 42; // Number
let text = 'Hello, World!'; // String
let isCodingFun = true; // Boolean
let notDefined; // Undefined
let emptyValue = null; // Null

console.log(typeof number); // Output: number
console.log(typeof text); // Output: string
console.log(typeof isCodingFun); // Output: boolean
console.log(typeof notDefined); // Output: undefined
console.log(typeof emptyValue); // Output: object (historical JavaScript quirk)
