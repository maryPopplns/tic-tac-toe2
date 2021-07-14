import { LABELS } from "./helper/colored_tiles.js";

const SCORE = () => {
  const GAME_CONTAINER = document.createElement("main");
  const SCORE_CONTAINER = document.createElement("div");
  const P_1_CONTAINER = document.createElement("div");
  const P_1_LABEL = document.createElement("div");
  const P_1_SCORE = document.createElement("div");
  const P_2_CONTAINER = document.createElement("div");
  const P_2_LABEL = document.createElement("div");
  const P_2_SCORE = document.createElement("div");
  const BLOCKS = [P_1_LABEL, P_1_SCORE, P_2_LABEL, P_2_SCORE];
  const ID_CLASS = ["p_1_label", "p_1_score", "p_2_label", "p_2_score"];

  GAME_CONTAINER.setAttribute("id", "game_container");
  SCORE_CONTAINER.setAttribute("id", "score_container");
  P_1_CONTAINER.setAttribute("id", "p_1_container");
  P_1_LABEL.setAttribute("id", "p_1_label");
  P_1_SCORE.setAttribute("id", "p_1_score");
  P_2_CONTAINER.setAttribute("id", "p_2_container");
  P_2_LABEL.setAttribute("id", "p_2_label");
  P_2_SCORE.setAttribute("id", "p_2_score");
  for (let i = 0; i < BLOCKS.length; i++) {
    BLOCKS[i].setAttribute("class", "score_block");
  }

  document.body.prepend(GAME_CONTAINER);
  GAME_CONTAINER.append(SCORE_CONTAINER);
  SCORE_CONTAINER.append(P_1_CONTAINER);
  SCORE_CONTAINER.append(P_2_CONTAINER);
  P_1_CONTAINER.append(P_1_LABEL);
  P_1_CONTAINER.append(P_1_SCORE);
  P_2_CONTAINER.append(P_2_LABEL);
  P_2_CONTAINER.append(P_2_SCORE);

  BLOCKS.map((container, container_index) => {
    for (let tile = 0; tile < 100; tile++) {
      const GRID_TILE = document.createElement("div");
      GRID_TILE.setAttribute("id", `${ID_CLASS[container_index]}_${tile}`);
      GRID_TILE.setAttribute(
        "class",
        `score_tile ${ID_CLASS[container_index]}`
      );
      BLOCKS[container_index].append(GRID_TILE);
      GRID_TILE.addEventListener(
        "click",
        (e) => (e.target.style.backgroundColor = "Red")
      );
      GRID_TILE.addEventListener(
        "dblclick",
        (e) => (e.target.style.backgroundColor = "black")
      );
    }
  });

  // <-adding ids to P_1_label tiles->

  Array.from(document.getElementsByClassName("p_1_label")).map((tile) => {
    const ID = +tile.id.match(/[0-9]/g).slice(1).join("");
    if (LABELS.p_1_label.includes(ID)) {
      tile.setAttribute("class", "p_1_label_colored");
    }
  });
};

export { SCORE };
