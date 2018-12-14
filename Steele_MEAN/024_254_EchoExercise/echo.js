// NODE EXERCISE

// Using the command line, creat a file "echo.js"
// Inside the file, write a function named echo that takes 2 arguments: a string
// and a number
// It should print out the string, number number of times

function echo(stringValue, intNumber) {
  for (var i = 0; i < intNumber; i++) {
    console.log(stringValue);
  }
}

echo("Echo!!!", 10);
echo("Tater Tots", 3);
