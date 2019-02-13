// Express Routing Assignment

// 1. Create a brand new Express app from scratch
////  npm install express --save
////  '--save' flag installs packages

// 2. Create a package.json using 'npm init' and add express as a dependency
// 3. In your main app.js file, add 3 different routes:

let express = require("express");
let app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get('/', function(req, res){
  res.send("Hi there, welcome to my assignment")
});

// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The pig says 'Woof Woof!'"
app.get("/speak/:animal", function(req,res){
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "I hate you human",
    goldfish: "..."
  }
  let animal = req.params.animal.toLowerCase();
  let sound = sounds[animal];
  res.send("The " + animal + " says '"+ sound + "'");
})

// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2" should print "blah blah"

app.get("/repeat/:message/:times", function(req, res){
  let message = req.params.message;
  let times = Number(req.params.times);
  let result = "";

  for (let i = 0; i < times; i++){
    result += message + " ";
  }
  res.send(result);
})

app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function(){
  console.log("Server has started!!!");
});
