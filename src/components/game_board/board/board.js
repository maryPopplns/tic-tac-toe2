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
  const TILE_CONTAINERS = [
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

  const IDS = [
    "grid_one",
    "grid_two",
    "grid_three",
    "grid_four",
    "grid_five",
    "grid_six",
    "grid_seven",
    "grid_eight",
    "grid_nine",
  ];

  BOARD_CONTAINER.setAttribute("id", "board_container");
  for (let i = 0; i < 9; i++) {
    TILE_CONTAINERS[i].setAttribute("id", `tile_container_${i}`);
    TILE_CONTAINERS[i].setAttribute("class", `tile_container`);
  }
  for (let i = 0; i < 9; i++) {
    BOARD_CONTAINER.append(TILE_CONTAINERS[i]);
  }
  GAME_CONTAINER.append(BOARD_CONTAINER);

  TILE_CONTAINERS.map((tile_container, id) => {
    for (let i = 0; i < 64; i++) {
      const TILE = document.createElement("div");
      TILE.setAttribute("class", `board_tile ${IDS[id]}`);
      tile_container.append(TILE);
    }
  });
};

export { BOARD };
