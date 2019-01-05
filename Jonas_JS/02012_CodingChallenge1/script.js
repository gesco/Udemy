/***************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).
*/
// 1. Store Mark's and John's mass and height in variables
var massMark = 78, // kg
    hightMark = 1.69; // meters
var massJohn = 92, // kg
    hightJohn = 1.95; // meters

// 2. Calculate both their BMIs
var markBMI = massMark / (hightMark * hightMark);
var johnBMI = massJohn / (hightJohn * hightJohn);
console.log(markBMI, johnBMI);

// 3. Create a boolean variable containing information about whether Mark has a
// higher BMI than John.
var boolResult = markBMI > johnBMI;

// 4. Print a string to the console containing the variable from step 3.
// (Something like "Is Mark's BMI higher than John's true").
console.log("Is Mark's BMI higher than John's? " + boolResult);
