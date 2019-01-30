var faker = require('faker');

// // Node.js
// var randomName = faker.name.findName();
// var randomEmail = faker.internet.email();
// var randomCard = faker.helpers.createCard();
//
// console.log(randomName); // Returns Troy Batz
// console.log(randomEmail); // Retuns Jaylin.Nader93@gmail.com
//
// // API
// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
// // Returns Torphy, Maynard Sr.

console.log("===================");
console.log("WELCOME TO MY SHOP!");
console.log("===================");

for (let i = 0; i < 10; i++) {
  console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
