// const gameBoardy = (function () {
//   let gameArray = [];
//   let gameboard = document.querySelector(".gameboard");

//   for (let i = 0; i < 9; i++) {
//     let field = document.createElement("div");
//     field.classList.add("field");
//     field.id = i
//     field.addEventListener("click", function(){
//       player1.placeMark();
//     })
//     gameboard.appendChild(field);
//   }
//   return {gameArray, field};
// })();

const Player = (player, x_or_o) => {
  const placeMark = function(x_or_o){
    gameBoardy.gameArray.push(x_or_o)
  }
  return { player, x_or_o, placeMark};
};

let player1 = Player("Toby", "x");
let player2 = Player("Steve", "o");


const Gameboard = (function(){
  return [];
})();

const placeMark = (function(player){
  let mark ="";
  if(player === player1){
    mark = "x";
  } else if(player === player2) {
    mark = "O";
  }

  let putMark = function(){
    Gameboard.push(mark);
  }
  return {putMark}
})();
