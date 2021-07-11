import {
  TIC,
  TAC,
  TOE,
  HORIZONTAL_RULES,
  PLAYERS,
  ONE_TWO,
} from "./helper/colored_tiles.js";

function home_page() {
  const HOME_PAGE = document.createElement("main");
  HOME_PAGE.setAttribute("id", "home");
  document.body.prepend(HOME_PAGE);
  for (let i = 0; i < 900; i++) {
    const HOME_PAGE_TILE = document.createElement("div");
    HOME_PAGE_TILE.setAttribute("id", `tile_${i}`);
    HOME_PAGE_TILE.setAttribute("class", "home_page_tile");
    HOME_PAGE.append(HOME_PAGE_TILE);
  }
}

export { home_page };
