import {
  TIC,
  TAC,
  TOE,
  BORDERS,
  PLAYERS,
  ONE_TWO,
} from "./helper/colored_tiles.js";

function home_page() {
  const HOME_PAGE = document.createElement("main");
  HOME_PAGE.setAttribute("id", "home");
  document.body.prepend(HOME_PAGE);
  for (let i = 0; i < 900; i++) {
    const HOME_PAGE_TILE = document.createElement("div");
    HOME_PAGE_TILE.setAttribute("id", i);
    HOME_PAGE_TILE.setAttribute("class", "home_page_tile");
    HOME_PAGE.append(HOME_PAGE_TILE);
  }

  // <-adds ids and classes to colored tiles->
  (function ELEMENT_DECORATOR(sections) {
    const TILE_DECORATOR = function (current_id, new_id, new_class) {
      const TILE = document.getElementById(current_id);
      TILE.id = new_id;
      TILE.className = new_class;
    };
    sections.forEach((section_obj) => {
      for (let letter in section_obj) {
        if (letter === "name") {
          continue;
        }
        section_obj[letter].forEach((current_id) => {
          const NEW_ID = `${section_obj.name}_${letter}_${current_id}`;
          const NEW_CLASS = `tile ${section_obj.name} ${section_obj.name}_${letter}`;
          TILE_DECORATOR(current_id, NEW_ID, NEW_CLASS);
        });
      }
    });
  })([TIC, TAC, TOE, BORDERS, PLAYERS, ONE_TWO]);
}

export { home_page };
