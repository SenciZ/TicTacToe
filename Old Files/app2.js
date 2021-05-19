const Gameboard = (() => {
  return [null, null, null, null, null, null, null, null, null];
})();

const Players = function (name, mark) {
  let placeMark = function (identifier) {
    Gameboard[identifier] = mark;
    let field = document.querySelectorAll(".field");
    field[identifier].textContent = Gameboard[identifier];
    currentPlayer.playerIs = player2;
  };

  return { name, mark, placeMark };
};

const gameFields = (function () {
  let fields = document.querySelectorAll(".field");
  for (let i = 0; i < fields.length; i++) {
    addEventListener("click", function(e) {
      let identifier = e.target.id;
      playerTurn.playerToGo.placeMark(identifier);
    });
  }
})();

let currentPlayer = (function(){
    let playerIs;
})();

const Player1 = Players("Mark", "X");
const Player2 = Players("John", "O");

const playerTurn = (function(){
  let playerToGo = Player1;
  return {playerToGo}
})();