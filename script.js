// Returns random choice from rock,paper, scissors
const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Ask the User for input, it needs to be one of the random choices
function getUserChoice() {
  let choiceInput = prompt("Rock, paper or scissor?");
  let choice =
    choiceInput[0].toUpperCase() + choiceInput.slice(1).toLocaleLowerCase();
  if (choices.indexOf(choice) >= 0) {
    return choice;
  } else {
    getUserChoice();
  }
}

// Compare user input and random from comp, returns 1 for player and 0 for comp
function round() {
  let playerSelection = getUserChoice();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    console.log("It is a TIE, the Round will be played again!");
    round();
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    console.log("You win! Rock beats Scissor");
    return 1;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log("You lose! Paper beats Rock!");
    return 0;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You win! Paper beats Rock");
    return 1;
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    console.log("You lose! Scissor beats Paper!");
    return 0;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    console.log("You win! Scissor beats Paper!");
    return 1;
  } else {
    console.log("You lose! Rock beats Scissor!");
    return 0;
  }
}

// Make a game of 5 rounds and display winner
function game() {
  //Player points are stored in result[1] and comp points in result[0]
  let result = [0, 0];

  for (i = 0; i < 5; i++) {
    result[parseInt(round())] += 1;
  }

  console.log("END RESULT");

  if (result[0] > result[1]) {
    console.log("You lose! The Ai wins the game!");
  } else if (result[1] > result[0]) {
    console.log("You win the GAME!");
  }
}

game();
