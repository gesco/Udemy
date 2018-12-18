/***************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version
using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were
$124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the
bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do
the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array
containing final paid amounts (bill + tip). HINT: Start with two empty arrays []
as properties and then fill them up in the loop.

5. Implement the same functinality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of
tips. HINT: Loop over the array, and in each iteration store the current sum in
a variable (starting from 0). After you have the sum of the array, divide it by
the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

// The Smith's OBJECT with a calcTip METHOD
var smith = {
  bill: [124, 48, 268, 180, 42],
  tip: [],
  totalBill: [],
  calcTip: function() {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        this.tip.push((this.bill[i] * 0.20));
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        this.tip.push((this.bill[i] * 0.15));
      } else {
        this.tip.push((this.bill[i] * 0.10));
      }
    }
    for (var j = 0; j < this.tip.length; j++) {
      this.totalBill.push(this.bill[j] + this.tip[j]);
    }
  }
};

// The Sanchez OBJECT with a calcTip METHOD
var sanchez = {
  bill: [134, 47, 208, 189, 170],
  tip: [],
  totalBill: [],
  calcTip: function() {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        this.tip.push((this.bill[i] * 0.20));
      } else if (this.bill[i] >= 50 && this.bill[i] < 200) {
        this.tip.push((this.bill[i] * 0.15));
      } else {
        this.tip.push((this.bill[i] * 0.10));
      }
    }
    for (var j = 0; j < this.tip.length; j++) {
      this.totalBill.push(this.bill[j] + this.tip[j]);
    }
  }
};

// Use the calcTip METHOD
smith.calcTip();
// console.log(smith.tip);
// console.log(smith.totalBill);
sanchez.calcTip();
// console.log(sanchez.tip);
// console.log(sanchez.totalBill);

// FUNCTION for finding the average tip of an array
function familyValues(ftArray) {
  var tipAccum = 0;
  var tipAvg;
  for (var k = 0; k < ftArray.length; k++ ) {
    tipAccum += ftArray[k];
    //console.log(ftArray[k]);
  }
  tipAvg = tipAccum / ftArray.length;
  //console.log(tipAvg);
  return tipAvg.toFixed(2);
}

// Display the Smith's and Sanchez tip average
console.log("Smith's: $" + familyValues(smith.tip));
console.log("Sanchez: $" + familyValues(sanchez.tip));

// Compare the families average tip and display the larger
if (familyValues(smith.tip) > familyValues(sanchez.tip)) {
  console.log("The Smith's average tip at $" + familyValues(smith.tip) +
    " is greater than the Sanchez average tip by $" +
    (familyValues(smith.tip) - familyValues(sanchez.tip))
  );
} else if (familyValues(sanchez.tip) > familyValues(smith.tip)) {
  console.log("The Sanchez average tip at $" + familyValues(sanchez.tip) +
    " is greater than the Smith's average tip by $" +
    (familyValues(sanchez.tip) - familyValues(smith.tip))
  );
} else {
  console.log("The Sanchez and Smith's have the same average tip at $" +
    familyValues(sanchez.tip));
}
