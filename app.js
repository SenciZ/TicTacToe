const Gameboard = (function(){
  let gameboard = [];
  let decision = function(gameboard){
    if(gameboard === ["X", "O", "X"]){
    console.log("Win");
  } else {
    console.log("No Win")
  }};
  return {gameboard, decision};
})();

const gridCreate = (function() {
  let gameboardGrid = document.querySelector(".gameboard");
  for (let i = 0; i < 9; i++) {
    let field = document.createElement("div");
    field.classList.add("field");
    field.id = i
    field.addEventListener("click", function(e){
      let identifier = e.target.id;
      currentPlayer.player.placeMark(identifier);
      if(currentPlayer.player === player1){
        currentPlayer.player = player2;
      } else if (currentPlayer.player === player2){
        currentPlayer.player = player1;
      };
    })
    gameboardGrid.appendChild(field);
  }
  return {gameboardGrid};
})();

const Players = function (name, mark) {
  let placeMark = function (identifier) {
    Gameboard.gameboard[identifier] = mark;
    let field = document.querySelectorAll(".field");
    field[identifier].textContent = Gameboard.gameboard[identifier];
    Gameboard.decision(Gameboard.gameboard);
  };

  return { name, mark, placeMark };
};

let player1 = Players("Toby", "X")
let player2 = Players("Joby", "O")


let currentPlayer = (function(){
  let player = player1
  return {player};
})();
