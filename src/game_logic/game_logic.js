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

  const PLAYER_MOVE = () => {
    const WINNER_CHECKER = () => {
      _moves++;
      if (_WINNER() !== undefined) {
        return _WINNER();
      }
    };
    if (_moves % 2 === 0 && _board[TARGET_ID] === undefined) {
      _board[TARGET_ID] = "X";
      return WINNER_CHECKER();
    }
    if (_moves % 2 !== 0 && _board[TARGET_ID] === undefined) {
      _board[TARGET_ID] = "O";
      return WINNER_CHECKER();
    }
  };

  const AI_MOVE = () => {
    console.log("AI_MOVE");
  };

  const CLEAR_BOARD = () => {
    for (let prop in _board) {
      _board[prop] = undefined;
    }
    _moves = 0;
  };

  return { PLAYER_MOVE, AI_MOVE, CLEAR_BOARD };
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

export { BOARD_LOGIC, PLAYER };
