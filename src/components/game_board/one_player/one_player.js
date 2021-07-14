import { GAME_BOARD } from "../board/board.js";
import { LABELS } from "../board/helper/colored_tiles.js";
import { BOARD_LOGIC, PLAYER } from "../../../game_logic/game_logic.js";

const ONE_PLAYER = () => {
  const PLAYER_ONE = PLAYER("one", "X");
  const PLAYER_TWO = PLAYER("two", "O");

  // <-adding ids to AI tiles->

  Array.from(document.getElementsByClassName("p_2_label")).map((tile) => {
    const ID = +tile.id.match(/[0-9]/g).slice(1).join("");
    if (LABELS.AI.includes(ID)) {
      tile.className += " ai_label_colored";
    }
  });
};

export { ONE_PLAYER };
