/***************************
* Objects and Methods
*/

var john = {
  firstName: 'John', // a key value pair
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Marko', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    //return 2018 - this.birthYear;
    this.age = 2018 - this.birthYear;
  }
};

//console.log(john.calcAge());
//john.age = john.calcAge();
john.calcAge();
console.log(john);
