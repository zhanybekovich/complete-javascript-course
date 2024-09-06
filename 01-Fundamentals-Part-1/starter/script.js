/**
 * Truthy and Falsy values
 */

// Falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Truthy values: NOT Falsy values
console.log(Boolean(-10));
console.log(Boolean("10"));
console.log(Boolean("Hello"));
console.log(Boolean({}));
console.log(Boolean([]));

// Type coercion happens in logical and comparison operators
const money = 1;
if (money) {
  console.log("I've money");
} else {
  console.log("Find a job!");
}
