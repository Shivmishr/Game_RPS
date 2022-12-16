// Proper Case
function toProperCase(a) {
  return a[0].toUpperCase() + a.slice(1).toLowerCase();
}

// RPS Game
var ch1 = "Rock";
var ch2 = "Paper";
var ch3 = "Scissor";

// Computer Choice
function getComputerChoice() {
  if (Math.random() < 0.33) {
    return ch1;
  } else if (Math.random() < 0.66) {
    return ch2;
  } else {
    return ch3;
  }
}

function game(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "Rock" && computerSelection == "Scissor") {
    return "You Win! Rock beats Scissor";
  } else if (playerSelection == "Scissor" && computerSelection == "Rock") {
    return "You Lose! Rock beats Scissor";
  } else if (playerSelection == "Scissor" && computerSelection == "Paper") {
    return "You Win! Scissor beats Paper";
  } else if (playerSelection == "Paper" && computerSelection == "Scissor") {
    return "You Lose! Scissor beats Paper";
  } else {
    return "You Both choses same! So No Winner this round";
  }
}
// Play Five times
for (let i = 1; i < 6; i++) {
  let playerSelection = toProperCase(prompt("Your Choice"));
  let computerSelection = getComputerChoice();
  document.write("<h1>" + "Round" + " " + i + "</h1>");
  document.write("<h2>");
  document.write(
    "<br>" +
      "<u>" +
      "User's Choice" +
      "</u>" +
      " " +
      ":" +
      " " +
      "<p>" +
      "<i>" +
      playerSelection +
      "</i>" +
      "</p>" +
      "<br>"
  );
  document.write(
    "<u>" +
      "Computer's Choice" +
      " " +
      "</u>" +
      ":" +
      " " +
      "</u>" +
      "<p>" +
      "<i>" +
      computerSelection +
      "</i>" +
      "</p>" +
      "<br>"
  );
  document.write("</h2>");
  document.write("<h1>" + game(playerSelection, computerSelection) + "</h1>");
  document.write("<br>");
}
