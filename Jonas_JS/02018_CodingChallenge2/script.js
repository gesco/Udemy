/***************************
* CODEING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams.  In the latest 3 games,
John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94,
and 123 points.
*/

// 1. Calculate the average score for each teams
var teamJohnAvg = (89 + 120 + 103) / 3;
var teamMikeAvg = (116 + 94 + 123) / 3;

// 2. Decide which teams win in average (highest average score), and print the
// winner to the console.  Also include the average score in the output.
function compareTwoScores(team1, team2) {
  if (teamJohnAvg > teamMikeAvg) {
    console.log("John's team has the highest average score with " +
      teamJohnAvg.toFixed(0) + " points." );
  } else if (teamMikeAvg > teamJohnAvg) {
    console.log("Mike's team has the highest average score with " +
      teamMikeAvg.toFixed(0) + " points.");
  } else {
    console.log("Mike and John are tied with " + teamMikeAvg.toFixed(0) +
      " points.");
  }
}

compareTwoScores(teamJohnAvg, teamMikeAvg);

// 3. Then change the scores to show different winners.  Don't forget to take into
// account there might be a draw (the same average score)
teamJohnAvg = (77 + 108 + 99) / 3;
teamMikeAvg = (101 + 90 + 77) / 3;

compareTwoScores(teamJohnAvg, teamMikeAvg);

teamJohnAvg = (99 + 99 + 99) / 3;
teamMikeAvg = (99 + 99 + 99) / 3;

compareTwoScores(teamJohnAvg, teamMikeAvg);

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105
// points.  Like before, change the scores to generate different winners, keeping
// in mind there might be draws.
teamJohnAvg = (99 + 99 + 99) / 3;
teamMikeAvg = (99 + 99 + 99) / 3;
var teamMaryAvg = (119 + 119 + 100) / 3;

if ( teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg )
    console.log("John's team is the winner with", teamJohnAvg.toFixed(0) +
    " points.");
else if ( teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg )
   console.log("Mike's team is the winner", teamMikeAvg.toFixed(0) +
   " points.");
else if ( teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg )
   console.log("Mary's team is the winner", teamMaryAvg.toFixed(0) + 
   " points.");
else
   console.log("There is a draw between all teams");
