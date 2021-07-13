import { TIC, TAC, TOE, BUTTON_1, BUTTON_2 } from "./helper/colored_tiles.js";
import { ONE_PLAYERS } from "../game_board/one_players/one_players.js";
import { TWO_PLAYERS } from "../game_board/two_players/two_players.js";

function home_page() {
  // <-generates grid->

  const HOME_PAGE = document.createElement("main");
  const GRID = document.createElement("div");
  HOME_PAGE.setAttribute("id", "home");
  GRID.setAttribute("id", "grid");
  document.body.prepend(HOME_PAGE);
  HOME_PAGE.append(GRID);
  for (let i = 0; i < 900; i++) {
    const HOME_PAGE_TILE = document.createElement("div");
    HOME_PAGE_TILE.setAttribute("id", i);
    HOME_PAGE_TILE.setAttribute("class", "home_tile black_tile");
    GRID.append(HOME_PAGE_TILE);
  }

  // <- ids/classes appended to colored tiles->

  (function DECORATOR(sections) {
    const TILE_DECORATOR = function (current_id, new_id, new_class) {
      const TILE = document.getElementById(current_id);
      TILE.id = new_id;
      TILE.className = new_class;
    };
    sections.map((section_obj) => {
      for (let letter in section_obj) {
        if (letter === "name") {
          continue;
        }
        section_obj[letter].map((current_id) => {
          const NEW_ID = `${section_obj.name}_${letter}_${current_id}`;
          const NEW_CLASS = `home_tile colored_tile ${section_obj.name} ${section_obj.name}_${letter}`;
          TILE_DECORATOR(current_id, NEW_ID, NEW_CLASS);
        });
      }
    });
  })([TIC, TAC, TOE, BUTTON_1, BUTTON_2]);

  // <-event listeners->

  const REMOVE_HOME = () => {
    const ALL_TILES = Array.from(document.getElementsByClassName("tile")).map(
      (old_tile) => {
        const NEW_TILE = old_tile.cloneNode(true);
        old_tile.parentNode.replaceChild(NEW_TILE, old_tile);
      }
    );
    document.getElementById("home").remove();
  };

  Array.from(document.getElementsByClassName("button1")).map((tile) =>
    tile.addEventListener("click", () => {
      REMOVE_HOME();
      ONE_PLAYERS();
    })
  );

  Array.from(document.getElementsByClassName("button2")).map((tile) =>
    tile.addEventListener("click", () => {
      REMOVE_HOME();
      TWO_PLAYERS();
    })
  );
}

export { home_page };
