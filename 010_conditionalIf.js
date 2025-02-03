// * get started with a simple condition then complexicity
// ! i used here else if condition that match my age and check if i'm an adult or a kid or older. preety simple right??
let myName = 'towhid';
const myAge = 20;
if (myAge <= 10) {
    console.log(`i'm a kid`);
} else if (myAge === 18) {
    console.log("ei i'm an adult");
} else if (myAge > 18) {
    console.log(`i'm more than an adult`);
} else {
    console.log(`is not a relative age `);
}

//
//! now let's test with the data types . still it's a basic
let nMyAge = 18;
if (nMyAge === 18) {
    console.log("ei I'm an adult"); //  it will run
}

let nMyAge2 = '18';
if (nMyAge2 == 18) {
    console.log("ei I'm an adult"); // also Runs (but avoids type checking)
}

if (nMyAge2 === 18) {
    console.log('that will not run'); // ❌ Doesn't run (strict comparison fails)
}
let isWorth;
if ((isWorth = true)) {
    console.log('give a thumbs up');
}
