// Returns random choice from rock,paper, scissors
const start = document.querySelector(".start");
const imgPlayer = document.querySelector(".img-player");
const btn = document.querySelectorAll(".btn");
const imgAi = document.querySelector(".img-ai");
const playerPoints = document.querySelector(".player-point");
const aiPoint = document.querySelector(".ai-point");
const conclusion = document.querySelector(".conc-text");
const winner = document.querySelector(".winner-text");
const curtain = document.querySelector(".winner");

let userChoice = "";

// Ask the User for input, it needs to be one of the random choices

const choices = ["Rock", "Paper", "Scissor"];
let result = [0, 0];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function check() {
  if (result[0] + result[1] === 5) {
    setTimeout(function () {
      curtain.classList.toggle("active");

      if (result[0] > result[1]) {
        winner.innerHTML = "You lose! The Ai wins the game!";
      } else if (result[1] > result[0]) {
        winner.innerHTML = "You win the GAME!";
      }
    }, 800);
  }
}
// Compare user input and random from comp, returns 1 for player and 0 for comp
function round() {
  let playerSelection = userChoice;
  console.log(playerSelection);
  let computerSelection = getComputerChoice();
  imgAi.src = computerSelection.toLowerCase() + ".png";

  if (playerSelection === computerSelection) {
    conclusion.innerHTML = "It is a TIE, the Round will be played again!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    conclusion.innerHTML = "You win! Rock beats Scissor";
    result[1] += 1;
    playerPoints.innerHTML = result[1];
    playerPoints.classList.toggle("shake");
    setTimeout(function () {
      playerPoints.classList.toggle("shake");
    }, 500);
    check();
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    conclusion.innerHTML = "You lose! Paper beats Rock!";
    result[0] += 1;
    aiPoint.innerHTML = result[0];
    aiPoint.classList.toggle("shake");
    setTimeout(function () {
      aiPoint.classList.toggle("shake");
    }, 500);
    check();
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    conclusion.innerHTML = "You win! Paper beats Rock";
    result[1] += 1;
    playerPoints.innerHTML = result[1];
    playerPoints.classList.toggle("shake");
    setTimeout(function () {
      playerPoints.classList.toggle("shake");
    }, 500);
    check();
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    conclusion.innerHTML = "You lose! Scissor beats Paper!";
    result[0] += 1;
    aiPoint.innerHTML = result[0];
    aiPoint.classList.toggle("shake");
    setTimeout(function () {
      aiPoint.classList.toggle("shake");
    }, 500);
    check();
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    conclusion.innerHTML = "You win! Scissor beats Paper!";
    result[1] += 1;
    playerPoints.innerHTML = result[1];
    playerPoints.classList.toggle("shake");
    setTimeout(function () {
      playerPoints.classList.toggle("shake");
    }, 500);
    check();
  } else {
    conclusion.innerHTML = "You lose! Rock beats Scissor!";
    result[0] += 1;
    aiPoint.innerHTML = result[0];
    aiPoint.classList.toggle("shake");
    setTimeout(function () {
      aiPoint.classList.toggle("shake");
    }, 500);
    check();
  }
}

//Player points are stored in result[1] and comp points in result[0]

btn.forEach((element) => {
  element.addEventListener("click", () => {
    userChoice = "";
    userChoice += element.innerHTML;
    imgPlayer.src = userChoice + ".png";

    round();
  });
});

start.addEventListener("click", () => {
  conclusion.innerHTML = "";
  imgPlayer.src = "rock.png";
  imgAi.src = "rock.png";
  curtain.classList.toggle("active");

  result[0] = 0;
  result[1] = 0;
  playerPoints.innerHTML = result[1];
  aiPoint.innerHTML = result[0];
});
