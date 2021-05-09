const Gameboard = (function(){
    return [];
})();

const Players = function(name, mark){
    let placeMark = function(){
        Gameboard.push(mark)
        let field = document.querySelector(".field")
        field.textContent = mark;
    }
    return {name, mark, placeMark}
};


const visualGameboard = (function(){
    let gameboard = document.querySelector(".gameboard");

    for (let i = 0; i < 9; i++) {
      let field = document.createElement("div");
      field.classList.add("field");
      field.id = i;
      field.addEventListener("click", function(){
          if(field.textContent === ""){
            Player1.placeMark();
          } else if (field.textContent === "X"){
              return;   
          } else if (field.textContent === "O"){
              return;
          }

      })
      gameboard.appendChild(field);
    }
})();