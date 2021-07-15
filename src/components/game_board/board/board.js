import { BOARD_LOGIC, GET_MOVES } from "../../../game_logic/game_logic.js";
import { GAME_PIECES } from "../board/helper/colored_tiles.js";

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
    "container_0",
    "container_1",
    "container_2",
    "container_3",
    "container_4",
    "container_5",
    "container_6",
    "container_7",
    "container_8",
  ];

  BOARD_CONTAINER.setAttribute("id", "board_container");
  for (let i = 0; i < 9; i++) {
    TILE_CONTAINERS[i].setAttribute("id", `tile_container_${i}`);
    TILE_CONTAINERS[i].setAttribute(
      "class",
      `tile_container tile_container_listener`
    );
  }
  for (let i = 0; i < 9; i++) {
    BOARD_CONTAINER.append(TILE_CONTAINERS[i]);
  }
  GAME_CONTAINER.append(BOARD_CONTAINER);

  TILE_CONTAINERS.map((tile_container, id) => {
    for (let i = 0; i < 64; i++) {
      const TILE = document.createElement("div");
      TILE.setAttribute("class", `board_tile ${IDS[id]}`);
      // <-no need for ID's right now->
      // TILE.setAttribute("id", `${IDS[id]}_${i}`);
      tile_container.append(TILE);
    }
  });

  // <--gets elements by class and changes background color

  Array.from(document.getElementsByClassName("tile_container_listener")).map(
    (container) => {
      container.addEventListener("mouseenter", (event) => {
        const ID = +event.currentTarget.id.match(/\d/g)[0];
        console.log(ID);
      });

      container.addEventListener("mouseleave", (event) => {
        const ID = +event.currentTarget.id.match(/\d/g)[0];
        console.log(ID);
      });
    }
  );

  // Array.from(document.getElementsByClassName("tile_container_0")).map(
  //   (tile) => {
  //     let id = +tile.id.match(/\d/g).slice(1).join("");
  //     if (GAME_PIECES.o.includes(id)) {
  //       tile.style.backgroundColor = "red";
  //     }
  //   }
  // );
};

export { GAME_BOARD };
