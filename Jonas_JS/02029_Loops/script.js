/***************************
* Loops and iteration
*/

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

// for (var i = 0; i < 10; i +=2) {
//   console.log(i);
// }
//
 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
//
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }
//
// // While loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// CONTINUE
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}
// Output for CONTINUE below
// John
// Smith
// designer
// blue

// BREAK
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}
// Output for BREAK below
// John
// script.js:45 Smith

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
