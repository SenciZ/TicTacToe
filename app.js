const gameBoard = (function () {
  let gameArray = ["", "", "", "", "", "", "", "", ""];
  let gameboard = document.querySelector(".gameboard");

  gameArray.forEach(function (index) {
    let field = document.createElement("div");
    field.classList.add("field");
    field.textContent = (`${gameArray[1]}`)
    gameboard.appendChild(field);
  });
})();

const Player = (player, x_or_o) => {
  return { player, x_or_o };
};
