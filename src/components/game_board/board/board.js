import { BOARD_LOGIC } from "../../../game_logic/game_logic.js";

const GAME_BOARD = () => {
  const GAME_CONTAINER = document.getElementById("game_container");
  const BOARD_CONTAINER = document.createElement("div");
  const TILE_CONTAINER_0 = document.createElement("div");
  const TILE_CONTAINER_1 = document.createElement("div");
  const TILE_CONTAINER_2 = document.createElement("div");
  const TILE_CONTAINER_3 = document.createElement("div");
  const TILE_CONTAINER_4 = document.createElement("div");
  const TILE_CONTAINER_5 = document.createElement("div");
  const TILE_CONTAINER_6 = document.createElement("div");
  const TILE_CONTAINER_7 = document.createElement("div");
  const TILE_CONTAINER_8 = document.createElement("div");

  const TILE_CONTAINERS = [
    TILE_CONTAINER_0,
    TILE_CONTAINER_1,
    TILE_CONTAINER_2,
    TILE_CONTAINER_3,
    TILE_CONTAINER_4,
    TILE_CONTAINER_5,
    TILE_CONTAINER_6,
    TILE_CONTAINER_7,
    TILE_CONTAINER_8,
  ];

  const IDS = [
    "tile_container_0",
    "tile_container_1",
    "tile_container_2",
    "tile_container_3",
    "tile_container_4",
    "tile_container_5",
    "tile_container_6",
    "tile_container_7",
    "tile_container_8",
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

export { GAME_BOARD };
