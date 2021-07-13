import { SCORE } from "../score/score.js";
import { GAME_BOARD } from "../board/board.js";
import { BOARD_TRACKER } from "../../../game_logic/game_logic.js";

const TWO_PLAYERS = () => {
  // <-event listeners->
  [...document.getElementsByClassName("tile_container")].map((container) =>
    container.addEventListener("click", (e) => {
      let BOARD = BOARD_TRACKER(e);
      BOARD.PLAYER_MOVE();
    })
  );
};

export { TWO_PLAYERS };
