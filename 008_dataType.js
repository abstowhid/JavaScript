//? prefer using vs code with better comment extension

//! data-types ==> premitive & non-premitive

// ?======================================================================================

//! Primitive Data Types
//* Number
let num = 42;

//* String
let str = 'Hello, world!';

//* Boolean
let isActive = true;

//* Undefined (variable declared but not assigned)
let x;

//* Null
let y = null;

//* Symbol
let uniqueID = Symbol('id');

//* BigInt
let bigNumber = 9007199254740991n;

//? ======================================================================================

//! Non-Primitive Data Types
//* Object
let person = {
    name: 'Towhid',
    age: 25,
    isStudent: false,
};

//* Array
let numbers = [1, 2, 3, 4];

// ?======================================================================================
//? Logging values and their types
console.log('Number:', num, 'Type:', typeof num);
console.log('String:', str, 'Type:', typeof str);
console.log('Boolean:', isActive, 'Type:', typeof isActive);
console.log('Undefined:', x, 'Type:', typeof x);
console.log('Null:', y, 'Type:', typeof y);
console.log('Symbol:', uniqueID, 'Type:', typeof uniqueID);
console.log('BigInt:', bigNumber, 'Type:', typeof bigNumber);
console.log('Object:', person, 'Type:', typeof person);
console.log('Array:', numbers, 'Type:', typeof numbers);

//*
//*
//*
// ! summary
//*
//*

//! all data types( with variable)
let number = 42; // Number
let text = 'Hello, World!'; // String
let isCodingFun = true; // Boolean
let notDefined; // Undefined
let emptyValue = null; // Null
let bigIntValue = 9007199254740991n; // BigInt
let uniqueId = Symbol('id'); // Symbol
let person1 = { name: 'Alice', age: 30 }; // Object
let numbers1 = [1, 2, 3, 4]; // Array (which is an object)

console.log(typeof number); // Output: number
console.log(typeof text); // Output: string
console.log(typeof isCodingFun); // Output: boolean
console.log(typeof notDefined); // Output: undefined
console.log(typeof emptyValue); // Output: object (historical JavaScript quirk)
console.log(typeof bigIntValue); // Output: bigint
console.log(typeof uniqueId); // Output: symbol
console.log(typeof person1); // Output: object
console.log(typeof numbers1); // Output: object (arrays are a type of object)
