import { GAME_PIECES } from "../components/game_board/board/helper/colored_tiles.js";
import { home_page } from "../components/home/home_page.js";

let _moves = 0;

let _board = {
  0: undefined,
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined,
  5: undefined,
  6: undefined,
  7: undefined,
  8: undefined,
};

const _ALL_WINNING_POSSIBILITIES = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const BOARD_LOGIC = (event) => {
  const TARGET_ID = event.currentTarget.id.match(/[0-9]/g)[0];

  const _WINNER = () => {
    const ACTUAL_VALUES = _ALL_WINNING_POSSIBILITIES.map((one_possibility) => {
      return one_possibility.map((tile) => _board[tile]);
    });
    const POSSIBLE_ONES = ACTUAL_VALUES.filter(
      (one_possibility) => !one_possibility.includes(undefined)
    );
    const _WINNER = POSSIBLE_ONES.filter((one_possibility) =>
      one_possibility.every(
        (current_value) => current_value === one_possibility[0]
      )
    );
    if (_WINNER[0] !== undefined) {
      return _WINNER[0][0];
    }
  };

  const _MARK_BOARD = () => {
    Array.from(document.getElementsByClassName(`container_${TARGET_ID}`)).map(
      (tile) => {
        const TILE_ID = +tile.id.match(/\d/g).slice(1).join("");
        if (_moves % 2 === 0) {
          if (GAME_PIECES.x.includes(TILE_ID)) {
            tile.style.backgroundColor = "#c94b4b";
          }
        }
        if (_moves % 2 !== 0) {
          if (GAME_PIECES.o.includes(TILE_ID)) {
            tile.style.backgroundColor = "#8a2be2";
          }
        }
      }
    );
  };

  const _WINNER_CHECKER = () => {
    _moves++;
    if (_WINNER() !== undefined) {
      return _WINNER();
    }
    if (_moves === 9) {
      CLEAR_BOARD();
    }
  };

  const PLAYER_MOVE = () => {
    if (_moves % 2 === 0 && _board[TARGET_ID] === undefined) {
      _board[TARGET_ID] = "X";
      _MARK_BOARD();
      return _WINNER_CHECKER();
    }
    if (_moves % 2 !== 0 && _board[TARGET_ID] === undefined) {
      _board[TARGET_ID] = "O";
      _MARK_BOARD();
      return _WINNER_CHECKER();
    }
  };

  const AI_MOVE = () => {
    const _MARK_BOARD_AI = (container) => {
      Array.from(document.getElementsByClassName(`container_${container}`)).map(
        (tile) => {
          const TILE_ID = +tile.id.match(/\d/g).slice(1).join("");
          if (GAME_PIECES.o.includes(TILE_ID)) {
            tile.style.backgroundColor = "#8a2be2";
          }
        }
      );
    };

    const BEST_MOVE_FINDER = () => {
      let best_move;
      let best_score = -Infinity;
      for (let prop in _board) {
        if (_board[prop] === undefined) {
          _board[prop] = "O";
          let score = minimax(_board, 0, true);
          _board[prop] = undefined;
          if (score > best_score) {
            best_score = score;
            best_move = prop;
          }
        }
      }
      _board[best_move] = "O";
      _MARK_BOARD_AI(best_move);
      // console.log(_WINNER_CHECKER());
      console.log(_WINNER());
      return _WINNER_CHECKER();
    };
    BEST_MOVE_FINDER();

    function minimax(_board, depth, isMaximizing) {
      let scores = {
        X: 1,
        O: -1,
        undefined: 0,
      };

      let result = _WINNER();
      if (result !== undefined) {
        return scores[result];
      }

      if (isMaximizing) {
        let best_score = -Infinity;
        for (let prop in _board) {
          if (_board[prop] === undefined) {
            _board[prop] = "O";
            let score = minimax(_board, depth + 1, false);
            _board[prop] = undefined;
            best_score = Math.max(score, best_score);
          }
        }
        return best_score;
      } else {
        let best_score = Infinity;
        for (let prop in _board) {
          if (_board[prop] === undefined) {
            _board[prop] = "X";
            let score = minimax(_board, depth + 1, true);
            _board[prop] = undefined;
            best_score = Math.min(score, best_score);
          }
        }
        return best_score;
      }
    }
  };

  const CLEAR_BOARD = () => {
    for (let prop in _board) {
      _board[prop] = undefined;
    }
    _moves = 0;
    Array.from(document.getElementsByClassName("board_tile")).map((tile) => {
      tile.style.backgroundColor = "";
    });
  };

  const GAME_OVER = () => {
    document.getElementById("game_container").remove();
    // <-add a page to declare the winner->
    document.body.prepend(home_page());
  };

  return { PLAYER_MOVE, AI_MOVE, CLEAR_BOARD, GAME_OVER };
};

const PLAYER = (name, game_piece) => {
  const _NAME = name;
  const _GAME_PIECE = game_piece;
  let _score = 0;

  const INCREASE_SCORE = () => _score++;
  const RETURN_SCORE = () => _score;
  const RETURN_PIECE = () => _GAME_PIECE;
  const RETURN_NAME = () => _NAME;

  return {
    INCREASE_SCORE,
    RETURN_SCORE,
    RETURN_PIECE,
    RETURN_NAME,
  };
};

const GET_MOVES = () => _moves;
const GET_BOARD = () => _board;

export { BOARD_LOGIC, PLAYER, GET_MOVES, GET_BOARD };
