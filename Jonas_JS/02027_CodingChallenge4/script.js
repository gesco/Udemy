/***************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge whre Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass,
and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the
object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the
full name and the respective BMI. Don't forget they might have the same BMI.

remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and
height in meter).
*/

// johnsInfo is an OBJECT
var johnsInfo = {
  firstName: 'John',
  lastName: 'Hopkins',
  mass: 92,
  height: 1.95,
  calcBMI: function() {       // calcBMI is the METHOD
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

// marksInfo is an OBJECT
var marksInfo = {
  firstName: 'Mark',
  lastName: 'Anthony',
  mass: 78,
  height: 1.69,
  calcBMI: function(mass, height) {       // calcBMI is the METHOD
    this.BMI = this.mass / (this.height * this.height);
  //console.log(this.mass / (this.height * this.height));
  }
};

// Got to call the calcBMI method before the program can compare
// John and Marks BMI
johnsInfo.calcBMI();
marksInfo.calcBMI();
// console.log(marksInfo.BMI.toFixed(2));
// console.log(johnsInfo.BMI.toFixed(2));

if (johnsInfo.BMI > marksInfo.BMI) {
  console.log(johnsInfo.firstName + " " + johnsInfo.lastName + " BMI: " +
              johnsInfo.BMI.toFixed(2) + " is greater than " +
              marksInfo.firstName + " " + marksInfo.lastName + " BMI: " +
              marksInfo.BMI.toFixed(2)
  );
} else if (marksInfo.BMI > johnsInfo.BMI) {
  console.log(marksInfo.firstName + " " + marksInfo.lastName + " BMI: " +
              marksInfo.BMI.toFixed(2) + " is greater than " +
              johnsInfo.firstName + " " + johnsInfo.lastName + " BMI: " +
              johnsInfo.BMI.toFixed(2)
  );
} else {
  console.log(
    johnsInfo.firstName + " " + johnsInfo.lastName + " is equal to " +
    marksInfo.firstName + " " + marksInfo.lastName
  );
}
