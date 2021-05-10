const Gameboard = (()=>{
  return [null, null , null, null, null, null, null, null, null];
})();

const Players = function (name, mark) {
  let placeMark = function (identifier) {
    Gameboard[identifier] = mark;
    let field = document.querySelectorAll(".field");
    field[identifier].textContent = Gameboard[identifier];
  };
  return { name, mark, placeMark };
};

const visualGameboard = (()=>{
  const gameboard = document.querySelector(".gameboard");
  for (let i = 0; i < 9; i++) {
    let field = document.createElement("div");
    field.classList.add("field");
    field.id = i;
    field.addEventListener("click", function(e) {
      let identifier = e.target.id;
      Player2.placeMark(identifier);
    });
    gameboard.appendChild(field);
  }
})();


const Player1 = Players("Mark", "X");
const Player2 = Players("John", "O");
