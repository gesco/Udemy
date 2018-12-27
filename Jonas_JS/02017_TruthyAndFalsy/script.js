/***************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values

var height;
// height = ''; // falsy
// height = 'twenty'; // true
// height = 0; // falsy
height = 23; // true

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
  console.log('The == operator does type coercion!');
}  // true

// Strict equality operator
if (height === '23') {
  console.log('The == operator does type coercion!');
}  // false - doesn't console.log()
