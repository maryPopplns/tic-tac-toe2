import { GAME_BOARD } from "../board/board.js";
import { LABELS, SCORE } from "../board/helper/colored_tiles.js";
import {
  BOARD_LOGIC,
  PLAYER,
  GET_MOVES,
} from "../../../game_logic/game_logic.js";

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

  Array.from(document.getElementsByClassName("tile_container")).map(
    (container) =>
      container.addEventListener("click", (e) => {
        const BOARD = BOARD_LOGIC(e);

        let score_changer = (player, className, color) => {
          Array.from(document.getElementsByClassName(className)).map((tile) => {
            const ID = +tile.id.match(/[0-9]/g).slice(1).join("");
            if (SCORE[player.RETURN_SCORE()].includes(ID)) {
              tile.style.backgroundColor = color;
            } else {
              tile.style.backgroundColor = "black";
            }
          });
        };

        if (GET_MOVES() % 2 === 0) {
          let PLAYER_WINNER = BOARD.PLAYER_MOVE();
          if (PLAYER_WINNER === "X") {
            PLAYER_ONE.INCREASE_SCORE();
            BOARD.CLEAR_BOARD();
            score_changer(PLAYER_ONE, "p_1_score", "#c94b4b");
            if (PLAYER_ONE.RETURN_SCORE() === 5) {
              BOARD.GAME_OVER();
            }
          }
        }

        if (GET_MOVES() % 2 !== 0) {
          let AI_WINNER = BOARD.AI_MOVE();
          if (AI_WINNER === "O") {
            PLAYER_TWO.INCREASE_SCORE();
            BOARD.CLEAR_BOARD();
            score_changer(PLAYER_TWO, "p_2_score", "#8a2be2");
            if (PLAYER_TWO.RETURN_SCORE() === 5) {
              BOARD.GAME_OVER();
            }
          }
        }
      })
  );
};

export { ONE_PLAYER };
