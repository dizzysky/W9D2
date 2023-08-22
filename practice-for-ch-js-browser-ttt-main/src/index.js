//Add your import statements for View and Game here
import View from "./ttt-view";
import Game from "../ttt_node/game";

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  const container = document.querySelector(".ttt");
  const view = new View(game, container);
});
