// Come up with 4 different ways to select the first <p> tag

var tag = [];

tag[0] = document.getElementById("first"); // Probably the
tag[1] = document.querySelector("#first"); // best options
tag[2] = document.getElementsByClassName("special")[0];
tag[3] = document.querySelector(".special");
tag[4] = document.querySelectorAll(".special")[0];
tag[5] = document.getElementsByTagName("p")[0];
tag[6] = document.querySelector("p");
tag[7] = document.querySelectorAll("p")[0];
tag[8] = document.querySelector("h1 + p");

console.log(tag);
// for (let i = 0; i < tag.length; i++){
//   console.log(tag[i]);
// }

// tag.forEach(function(tag) {
//   console.log(tag);
// });

for (var i in tag) {
  console.log(tag[i]);
}
