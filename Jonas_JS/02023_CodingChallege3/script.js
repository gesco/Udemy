/***************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The
bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator
(as a function).  He likes to tip 20% of the bill when the bill is less than
$50, 15% when the bill is between $50 and $200, and 10% if the bill is more
than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
*/

function tipCalculator(billA, billB, billC) {

  var bill = [billA, billB, billC];
  var tip = [];
  var paidAmount = [];

  for (var i = 0; i < bill.length; i++) {
    if (bill[i] < 50) {
      tip.push((bill[i] * 0.20));
    } else if (bill[i] >= 50 && bill[i] < 200) {
      tip.push((bill[i] * 0.15));
    } else {
      tip.push((bill[i] * 0.10));
    }
  }

  for (var j = 0; j < tip.length; j++) {
    paidAmount.push(bill[j] + tip[j]);
  }

  console.log(tip);
  console.log(paidAmount);
}

tipCalculator(124, 48, 268);
