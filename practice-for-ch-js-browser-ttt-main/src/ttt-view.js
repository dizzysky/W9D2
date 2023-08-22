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
  }

  handleClick(e) {
  }

  makeMove(square) {
  }

  handleGameOver() {
  }
}

console.log('view');
export default View;
