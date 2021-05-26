const Gameboard = (function () {
  let gameboard = [];
  // let decision = function (item) {
  //   if (
  //     (item[0] === "X" && item[1] === "X" && item[2] === "X") ||
  //     (item[0] === "X" && item[3] === "X" && item[6] === "X") ||
  //     (item[2] === "X" && item[5] === "X" && item[8] === "X") ||
  //     (item[6] === "X" && item[7] === "X" && item[8] === "X") ||
  //     (item[6] === "X" && item[4] === "X" && item[2] === "X") ||
  //     (item[0] === "X" && item[4] === "X" && item[8] === "X") ||
  //     (item[3] === "X" && item[4] === "X" && item[5] === "X") ||
  //     (item[1] === "X" && item[4] === "X" && item[7] === "X")
  //   ) {
  //     gridCreate.winnerDisplay.textContent = "Player X Wins!";
  //   } else if (
  //     (item[0] === "O" && item[1] === "O" && item[2] === "O") ||
  //     (item[0] === "O" && item[3] === "O" && item[6] === "O") ||
  //     (item[2] === "O" && item[5] === "O" && item[8] === "O") ||
  //     (item[6] === "O" && item[7] === "O" && item[8] === "O") ||
  //     (item[6] === "O" && item[4] === "O" && item[2] === "O") ||
  //     (item[0] === "O" && item[4] === "O" && item[8] === "O") ||
  //     (item[3] === "O" && item[4] === "O" && item[5] === "O") ||
  //     (item[1] === "O" && item[4] === "O" && item[7] === "O")
  //   ) {
  //     gridCreate.winnerDisplay.textContent = "Player O Wins!";
  //   } else {
  //     console.log("No Win");
  //   }
  // };

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winnerDeclared = false;

  // check winner
  const decision = function () {
    winningCombos.forEach((item) => {
      if (
        Gameboard.gameboard[item[0]] === currentPlayer.player.mark &&
        Gameboard.gameboard[item[1]] === currentPlayer.player.mark &&
        Gameboard.gameboard[item[2]] === currentPlayer.player.mark
      ) {
        gridCreate.winnerDisplay.textContent = `Player ${currentPlayer.player.mark} Wins!`;
        Gameboard.winnerDeclared = true;
      }
    });
  };
  return { gameboard, decision, winnerDeclared };
})();

const start = (function () {
  let startBtn = document.querySelector(".startGame");
  startBtn.addEventListener("click", function () {
    if (gridCreate.gameboardGrid.firstChild) {
      while (gridCreate.gameboardGrid.firstChild) {
        gridCreate.gameboardGrid.removeChild(
          gridCreate.gameboardGrid.firstChild
        );
      }
      gridCreate.griddy();
      Gameboard.winnerDeclared = false;

      currentPlayer.player = player1;
      Gameboard.gameboard = [];
    } else {
      gridCreate.griddy();
      Gameboard.winnerDeclared = false;
      currentPlayer.player = player1;
    }
  });
})();

const gridCreate = (function () {
  let winnerDisplay = document.querySelector(".winner");
  let gameboardGrid = document.querySelector(".gameboard");
  let griddy = function () {
    for (let i = 0; i < 9; i++) {
      let field = document.createElement("div");
      field.classList.add("field");
      field.id = i;
      field.addEventListener("click", function (e) {
        let identifier = e.target.id;
        if (Gameboard.winnerDeclared === true) {
          return;
        } else {
          currentPlayer.player.placeMark(identifier);
          if (currentPlayer.player === player1) {
            currentPlayer.player = player2;
          } else if (currentPlayer.player === player2) {
            currentPlayer.player = player1;
          }
        }
      });
      gameboardGrid.appendChild(field);
    }
    gridCreate.winnerDisplay.textContent = "Player X Start";
  };
  return { gameboardGrid, griddy, winnerDisplay };
})();

// Factory function to create players
const Players = function (name, mark) {
  // Creates a placeMark Method on each player that the factory creates
  let placeMark = function (identifier) {
    Gameboard.gameboard[identifier] = mark;
    let field = document.querySelectorAll(".field");
    if (field[identifier].textContent === "") {
      field[identifier].textContent = mark;
    } else {
      return;
    }
    Gameboard.decision(Gameboard.gameboard);
  };

  return { name, mark, placeMark };
};

let player1 = Players("Toby", "X");
let player2 = Players("Joby", "O");

// Sets the starting player to player 1
let currentPlayer = (function () {
  let player = player1;
  return { player };
})();
