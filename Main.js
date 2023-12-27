// This is a virtual ATM machine created by awkwardpy

var accountNumber = "1500790776345"; //
var pin = "4321"; // 
var balance = 100000; // 

// Define some variables
var screen = document.getElementById("screen"); // The screen element
var keypad = document.getElementById("keypad"); // The keypad element
var buttons = document.querySelectorAll("button"); // The buttons element

var input = "";

function display(message) {
  screen.innerHTML = message;
}

function handleClick(event) {
  var value = event.target.value; 
  if (value === "clear") {
    input = "";
    display("Welcome to the ATM. Please enter your account number.");
  } else if (value === "enter") {
    if (input === accountNumber) {
      input = "";
      display("Please enter your pin.");
    } else if (input === pin) {
      input = "";
      display(
        "Please choose an option: <br> 1. Check balance <br> 2. Withdraw money <br> 3. Deposit money"
      );
    } else if (input === "1") {
      input = "";
      display("Your balance is $" + balance + ".<br> Press clear to start over.");
    } else if (input === "2") {
      input = "";
      display("Please enter the amount to withdraw.");
    } else if (input === "3") {
      input = "";
      display("Please enter the amount to deposit.");
    } else if (input > 0) {
      var amount = Number(input); // Convert the input to a number
      if (screen.innerHTML.includes("withdraw")) {
        if (amount <= balance) {
          balance -= amount;
          input = "";
          display(
            "You have withdrawn $" +
              amount +
              ".<br> Your new balance is $" +
              balance +
              ".<br> Press clear to start over."
          );
        } else {
          input = "";
          display(
            "You do not have enough funds to withdraw $" +
              amount +
              ".<br> Press clear to start over."
          );
        }
      } else if (screen.innerHTML.includes("deposit")) {
        balance += amount;
        input = "";
        display(
          "You have deposited $" +
            amount +
            ".<br> Your new balance is $" +
            balance +
            ".<br> Press clear to start over."
        );
      } else {
        input = "";
        display("Invalid input. Press clear to start over.");
      }
    } else {
      input = "";
      display("Invalid input. Press clear to start over.");
    }
  } else {
    input += value;
    display(input);
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});


display("Welcome to the ATM. Please enter your account number.");
