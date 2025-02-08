// Arithmetic Operators
let a = 10,
    b = 5;
console.log('Addition:', a + b); // 15
console.log('Subtraction:', a - b); // 5
console.log('Multiplication:', a * b); // 50
console.log('Division:', a / b); // 2
console.log('Modulus:', a % b); // 0
console.log('Exponentiation:', a ** b); // 100000

// Assignment Operators
let x = 10;
x += 5; // x = x + 5
console.log('After += 5:', x); // 15
x -= 3; // x = x - 3
console.log('After -= 3:', x); // 12
x *= 2; // x = x * 2
console.log('After *= 2:', x); // 24
x /= 4; // x = x / 4
console.log('After /= 4:', x); // 6
x %= 2; // x = x % 2
console.log('After %= 2:', x); // 0

// Comparison Operators
console.log('Equal:', 5 == 5); // true
console.log('Not Equal:', 5 != 3); // true
console.log('Greater than:', 10 > 5); // true
console.log('Less than:', 3 < 7); // true
console.log('Greater or Equal:', 5 >= 5); // true
console.log('Less or Equal:', 10 <= 5); // false

// Logical Operators
let y = false;
console.log('Logical AND:', true && y); // false
console.log('Logical OR:', true || y); // true
console.log('Logical NOT:', !true); // false

// Ternary Operator
let age1 = 18;
let result = age1 >= 18 ? 'Adult' : 'Minor';
console.log('Ternary Operator:', result); // Adult

// Increment and Decrement Operators
let count = 10;
console.log('Post-increment:', count++); // 10 (then incremented) not in the same line
console.log('Pre-increment:', ++count); // 12 ( update in the same line instant)
console.log('Post-decrement:', count--); // 12 (then decremented) not in the same line
console.log('Pre-decrement:', --count); // 10 (update in the same line instant)

// Type Operators
console.log('Type of 42:', typeof 42); // "number"
console.log("Type of 'Hello':", typeof 'Hello'); // "string"
console.log('Type of null:', typeof null); // "object" (known bug in JS)

// Bitwise Operators
let m = 5,
    n = 3; // 0101 & 0011 in binary
console.log('Bitwise AND:', m & n); // 1
console.log('Bitwise OR:', m | n); // 7
console.log('Bitwise XOR:', m ^ n); // 6
console.log('Bitwise NOT:', ~m); // -6
console.log('Left shift:', m << 1); // 10
console.log('Right shift:', m >> 1); // 2

// String Operator (Concatenation)
let firstName = 'Towhid',
    lastName = 'Hossain';
console.log('String Concatenation:', firstName + ' ' + lastName); // "Towhid Hossain"

// Spread Operator           used in min max in math
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log('Spread Operator:', arr2); // [1, 2, 3, 4, 5]

// Destructuring Assignment
let person = { name: 'Towhid', age: 25 };
let { name, age } = person;
console.log('Destructuring:', name, age); // "Towhid", 25

// Nullish Coalescing Operator
let userName = null;
let resultName = userName ?? 'Guest';
console.log('Nullish Coalescing:', resultName); // "Guest"

// Optional Chaining Operator
let user = { profile: { name: 'Towhid' } };
console.log('Optional Chaining:', user.profile?.name); // "Towhid"
console.log('Optional Chaining (undefined):', user.address?.street); // undefined
