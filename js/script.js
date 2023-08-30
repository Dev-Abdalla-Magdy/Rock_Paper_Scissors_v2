let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

/*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      };
    }
    */

updateScoreElement();

function calcResult(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else if (computerMove === "scissors") {
      result = "You Win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateResultElement();
  updateMovesElement();
  updateScoreElement();

  function updateResultElement() {
    document.querySelector(".js-result").innerHTML = `${result}`;
  }

  function updateMovesElement() {
    document.querySelector(".js-moves").innerHTML = `you
    <img src="files/${playerMove}-emoji.png" class="move-icon">
    <img src="files/${computerMove}-emoji.png" class="move-icon">
    Computer`;
  }
  //     alert(`You Picked ${playerMove}. Computer Picked ${computerMove}.${result}
  // wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`);
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
