var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
  //res.send("Hello, it works!");
  request("http://omdbapi.com/?s=california&apikey=thewdb", function(error, response, body){
    if(!error && response.statusCode == 200){
      //res.send(body);
      var data = JSON.parse(body);
      //res.send(results.Search[0].Title);
      res.render("results", {data: data});
    }
  });
});





app.listen(3000, function(){
  console.log("Moive App has started!!!");
});
