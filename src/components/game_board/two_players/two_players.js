import { SCORE } from "../score/score.js";
import { GAME_BOARD } from "../board/board.js";
import { BOARD_LOGIC } from "../../../game_logic/game_logic.js";

const TWO_PLAYERS = () => {
  // <-event listeners->
  [...document.getElementsByClassName("tile_container")].map((container) =>
    container.addEventListener("click", (e) => {
      let BOARD = BOARD_LOGIC(e);
      BOARD.PLAYER_MOVE();
      BOARD.WINNER();
    })
  );
};

export { TWO_PLAYERS };
