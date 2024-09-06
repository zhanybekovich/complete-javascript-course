// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);

/**
 * Type Conversion is when we explicitly convert types
 */

// Conversion to number
let inputYear = "1991";
inputYear = Number(inputYear);
console.log(inputYear + 18);

let a = "Hello";
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(+"5" + 5);
console.log(parseFloat("50.9") + 5);
console.log(parseInt("50") + 5);

// conversion to string
console.log(String(23));
console.log("" + 45);

// conversion to boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

// type coercion
console.log("I'm" + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "18");
