const BOARD = () => {
  const GAME_CONTAINER = document.getElementById("game_container");
  const BOARD_CONTAINER = document.createElement("div");
  const GRID_ONE = document.createElement("div");
  const GRID_TWO = document.createElement("div");
  const GRID_THREE = document.createElement("div");
  const GRID_FOUR = document.createElement("div");
  const GRID_FIVE = document.createElement("div");
  const GRID_SIX = document.createElement("div");
  const GRID_SEVEN = document.createElement("div");
  const GRID_EIGHT = document.createElement("div");
  const GRID_NINE = document.createElement("div");
  const GRIDS = [
    GRID_ONE,
    GRID_TWO,
    GRID_THREE,
    GRID_FOUR,
    GRID_FIVE,
    GRID_SIX,
    GRID_SEVEN,
    GRID_EIGHT,
    GRID_NINE,
  ];

  BOARD_CONTAINER.setAttribute("id", "board_container");
  for (let i = 0; i < 9; i++) {
    GRIDS[i].setAttribute("id", `tile_${i}`);
    GRIDS[i].setAttribute("class", `ttt_tile`);
  }
  for (let i = 0; i < 9; i++) {
    BOARD_CONTAINER.append(GRIDS[i]);
  }
  GAME_CONTAINER.append(BOARD_CONTAINER);
};

export { BOARD };
