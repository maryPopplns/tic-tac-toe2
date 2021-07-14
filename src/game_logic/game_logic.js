let moves = 0;

let board = {
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

const ALL_WINNING_POSSIBILITIES = [
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

  const WINNER = () => {
    const ACTUAL_VALUES = ALL_WINNING_POSSIBILITIES.map((one_possibility) => {
      return one_possibility.map((tile) => board[tile]);
    });
    const POSSIBLE_ONES = ACTUAL_VALUES.filter(
      (one_possibility) => !one_possibility.includes(undefined)
    );
    const WINNER = POSSIBLE_ONES.filter((one_possibility) =>
      one_possibility.every(
        (current_value) => current_value === one_possibility[0]
      )
    );
    if (WINNER[0] !== undefined) {
      return WINNER[0][0];
    }
  };

  const PLAYER_MOVE = () => {
    const PLAYER_MOVE_HELPER = () => {
      moves++;
      if (WINNER() !== undefined) {
        return WINNER();
      }
    };
    if (moves % 2 === 0 && board[TARGET_ID] === undefined) {
      board[TARGET_ID] = "X";
      PLAYER_MOVE_HELPER();
    }
    if (moves % 2 !== 0 && board[TARGET_ID] === undefined) {
      board[TARGET_ID] = "O";
      PLAYER_MOVE_HELPER();
    }
  };

  const AI_MOVE = () => {
    console.log("AI_MOVE");
  };

  const CLEAR_BOARD = () => {
    for (let prop in board) {
      board[prop] = undefined;
    }
    moves = 0;
  };

  return { PLAYER_MOVE, AI_MOVE, CLEAR_BOARD };
};

// const PLAYER = () => {

// }

export { BOARD_LOGIC };
