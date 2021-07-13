import { SCORE } from "../score/score.js";
import { GAME_BOARD } from "../board/board.js";
import { BOARD_TRACKER } from "../../../game_logic/game_logic.js";

const TWO_PLAYERS = () => {
  //might want to make score it own module as well
  const GAME_CONTAINER = document.createElement("main");
  GAME_CONTAINER.setAttribute("id", "game_container");
  document.body.prepend(GAME_CONTAINER);

  SCORE();
  GAME_BOARD();

  // <-board listeners->

  [...document.getElementsByClassName("tile_container")].map((container) =>
    container.addEventListener("click", (e) => {
      let BOARD = BOARD_TRACKER(e);
      BOARD.PLAYER_MOVE();
    })
  );
};

export { TWO_PLAYERS };
