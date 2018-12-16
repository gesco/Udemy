/***************************
* Objects and properties
*/

// Object literal
var john = {
  firstName: 'John', // a key value pair
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Marko', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john['birthYear']);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane[lastName] = 'Smith';
console.log(jane);
