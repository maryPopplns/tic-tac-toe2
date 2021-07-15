import { GAME_BOARD } from "../board/board.js";
import { LABELS } from "../board/helper/colored_tiles.js";
import { BOARD_LOGIC, PLAYER } from "../../../game_logic/game_logic.js";

const TWO_PLAYERS = () => {
  const PLAYER_ONE = PLAYER("one", "X");
  const PLAYER_TWO = PLAYER("two", "O");

  // <-adding ids to p_2_label tiles->

  Array.from(document.getElementsByClassName("p_2_label")).map((tile) => {
    const ID = +tile.id.match(/[0-9]/g).slice(1).join("");
    if (LABELS.p_2_label.includes(ID)) {
      tile.className += " p_2_label_colored";
    }
  });

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
