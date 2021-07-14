import { GAME_BOARD } from "../board/board.js";
import { BOARD_LOGIC, PLAYER } from "../../../game_logic/game_logic.js";

const TWO_PLAYERS = () => {
  // <-event listeners->

  const PLAYER_ONE = PLAYER("one", "X");
  const PLAYER_TWO = PLAYER("two", "O");

  // <-event listeners for ttt-grid->

  Array.from(document.getElementsByClassName("tile_container")).map(
    (container) =>
      container.addEventListener("click", (e) => {
        const BOARD = BOARD_LOGIC(e);
        let WINNER = BOARD.PLAYER_MOVE();

        if (WINNER === "X") {
          PLAYER_ONE.INCREASE_SCORE();
          BOARD.CLEAR_BOARD();
          console.log(PLAYER_ONE.RETURN_SCORE());
        }
        if (WINNER === "O") {
          PLAYER_TWO.INCREASE_SCORE();
          BOARD.CLEAR_BOARD();
          console.log(PLAYER_TWO.RETURN_SCORE());
        }
      })
  );
};

export { TWO_PLAYERS };
