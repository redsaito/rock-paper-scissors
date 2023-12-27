function gameLogic(playerInput) {
  var randomNumber = Math.floor(Math.random() * 3);
  var randomInput =
    document.querySelectorAll(".cols span")[randomNumber].innerText;

  console.log("Player: " + playerInput);
  console.log("Computer: " + randomInput);
  if (playerInput == randomInput) {
    document
      .querySelectorAll(".cols")
      [randomNumber].classList.toggle("green-border");
    return "tie";
  }

  var getComputerCol = document.querySelectorAll(".cols");
  getComputerCol[randomNumber].classList.toggle("red-border");
  var getPlayerCol = document.querySelectorAll(".cols");
  getPlayerCol.forEach((el) => {
    if (el.innerText == playerInput) {
      el.classList.toggle("blue-border");
    }
  });

  switch (playerInput) {
    case "Rock":
      if (randomInput == "Paper") {
        return "computerWin";
      } else {
        return "playerWin";
      }
      break;
    case "Scissors":
      if (randomInput == "Rock") {
        return "computerWin";
      } else {
        return "playerWin";
      }
      break;

    case "Paper":
      if (randomInput == "Scissors") {
        return "computerWin";
      } else {
        return "playerWin";
      }
      break;

    default:
      console.log("Error Occured.");
      break;
  }
}

function clearBorder() {
  var getCols = document.querySelectorAll(".cols");
  getCols.forEach((el) => {
    el.classList.remove("red-border");
    el.classList.remove("blue-border");
    el.classList.remove("green-border");
  });
}

function updateScore(winner) {
  var computerWin = "Oh you lost, try again!";
  var playerWin = "You won! great Job!";
  var tie = "That's a Tie. try again!";
  var h1 = document.querySelector("h1");
  var player = document.querySelector(".player-score");
  var computer = document.querySelector(".computer-score");

  if (winner == "tie") {
    h1.innerText = tie;
  } else if (winner == "computerWin") {
    computerScore++;
    computer.innerText = "Computer " + computerScore + " 🟦";
    h1.innerText = computerWin;
  } else if (winner == "playerWin") {
    playerScore++;
    player.innerText = "Player " + playerScore + " 🟦";
    h1.innerText = playerWin;
  }
}

var playerScore = 0;
var computerScore = 0;
document.querySelectorAll("button").forEach(function (item) {
  item.addEventListener("click", function () {
    clearBorder();
    var result = gameLogic(this.innerText);
    updateScore(result);
  });
});
