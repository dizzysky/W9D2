class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();

  }

  setupBoard() {
    const ul = document.createElement("ul");
    for(let row = 0;row<3;row++){
      for(let col = 0;col<3;col++){
        let li = document.createElement("li");
        li.dataset.pos = JSON.stringify([row, col]);
        ul.append(li);
      }
    }
    this.el.append(ul);

    this.el.addEventListener("click", this.handleClick);
  }

  handleClick = (e) => {
    const el = e.target;

    if(el.nodeName === "LI") {
      this.makeMove(el);
    }

    console.log("handling click");


  }

  makeMove(square) {

    const pos = JSON.parse(square.dataset.pos); 

    console.log("making move");
    const currentPlayer = this.game.currentPlayer;


    try {
      this.game.playMove(pos);
    } catch(error) {
      alert("Invalid move!!");
    }

    square.classList.add(currentPlayer);




    if (this.game.isOver()) this.handleGameOver();


  }

  handleGameOver() {

      const winner = this.game.winner(); 
      const notify = document.createElement("p");
      if(winner) {
        notify.append(`Winner is ${winner}`);
      } else {
        notify.append("draw");
      }

      this.el.append(notify);




  }
}

console.log('view');
export default View;
