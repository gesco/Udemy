/***************************
* Functions
*/

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMiguel = calculateAge(1948);
var ageJanita = calculateAge(1969);
console.log(ageJohn, ageMiguel, ageJanita);

function yearsUnitlRetirement(year, firstName)
{
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
  } else {
    console.log(firstName + ' is already retired');
  }
}

yearsUnitlRetirement(1990, 'John');
yearsUnitlRetirement(1948, 'Mike');
yearsUnitlRetirement(1990, 'Jane');
