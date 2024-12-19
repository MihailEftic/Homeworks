console.log("Hello world");

/*
HOMEWORK Part 3
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()!
*/

function atmWithdrawal() {
  let balance = 1000;
  let amount = parseFloat(prompt("Enter amount you would like to withdraw"));

  if (amount > balance) {
    console.log("Not enough money");
  } else {
    balance = balance - amount;
    console.log("You withdrew $" + amount + "Remaining balance is:" + balance);
  }
}

//Answer after calling the function

atmWithdrawal();
