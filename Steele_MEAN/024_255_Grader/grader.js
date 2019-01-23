// Node Exercise 2
// AVERAGE GRADE

// Create a new file, "grader.js"

// In the file define a new function named "average"
// It should take a single parameter: an array of test scores(all numbers)
// It should return the average score in the array, rounded to the nearest whole numbers

const scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));  // should return 94

const scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // should return 68

function average(scr) {
  let total = 0;
  for (let i = 0; i < scr.length; i++) {
    total += scr[i];
  }
  return Math.round(total / scr.length);
}

// ALTERNATE CODE I
// function average(scr) {
//   let total = 0;
//   // add all scores together
//   scr.forEach(function(scr){
//     total += scr;
//   });
//
//   // divide by total number of scores
//   let avg = total/scores.length;
//
//   // round average
//   return Math.round(avg);
// }

// ALTERNATE CODE II
// const sum = scores.reduce((total, amount) => total + amount);
// console.log(sum);

const averageA = scores.reduce((total, amount) => total + amount) / scores.length;
console.log(Math.round(averageA));

const averageB = scores2.reduce((total, amount) => total + amount) / scores2.length;
console.log(Math.round(averageB));
