// Creating a JavaScript object with properties and methods

const person = {
    // Properties
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    job: 'Developer',
    hobbies: ['reading', 'coding', 'traveling'],

    // Method to get the full name
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },

    // Method to check if the person is an adult
    isAdult: function () {
        return this.age >= 18;
    },

    // Method to display a greeting message
    greet: function () {
        return `Hello, my name is ${this.getFullName()} and I am a ${
            this.job
        }.`;
    },

    // Method to add a new hobby
    addHobby: function (hobby) {
        this.hobbies.push(hobby);
    },

    // Method to list all hobbies
    listHobbies: function () {
        return `My hobbies are: ${this.hobbies.join(', ')}.`;
    },

    // Method to update the job
    updateJob: function (newJob) {
        this.job = newJob;
    },
};

// Using the object methods
console.log(person.getFullName()); // Output: John Doe
console.log(person.isAdult()); // Output: true
console.log(person.greet()); // Output: Hello, my name is John Doe and I am a Developer.

// Adding a new hobby
person.addHobby('painting');
console.log(person.listHobbies()); // Output: My hobbies are: reading, coding, traveling, painting.

// Updating the job
person.updateJob('Senior Developer');
console.log(person.greet()); // Output: Hello, my name is John Doe and I am a Senior Developer.

// Explanation:
// - 'this' refers to the current object, allowing access to its properties and other methods.
// - Methods are functions defined within the object, providing reusable actions.
// - Template literals (``) are used for cleaner string interpolation.
// - The object can be dynamically updated with new properties and methods.

// You can add more properties and methods as needed!
