let age = 20;
let message =
    age >= 18 && age < 21
        ? 'You are an adult but not 21 yet.'
        : 'You are either a minor or a full adult.';

console.log(message); // Output: "You are an adult but not 21 yet."

//there is an another way without he &&(and) because ternary can handle it
let age1 = 20;
let message1 =
    age1 >= 18
        ? age1 < 21
            ? 'You are an adult but not 21 yet.'
            : 'You are a full adult.'
        : 'You are a minor.';

console.log(message1); // Output: "You are an adult but not 21 yet."
