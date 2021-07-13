const SCORE = () => {
  const GAME_CONTAINER = document.createElement("main");
  const SCORE_CONTAINER = document.createElement("div");
  const P_1_CONTAINER = document.createElement("div");
  const P_1_LABEL = document.createElement("div");
  const P_1_SCORE = document.createElement("div");
  const P_2_CONTAINER = document.createElement("div");

  GAME_CONTAINER.setAttribute("id", "game_container");
  SCORE_CONTAINER.setAttribute("id", "score_container");
  P_1_CONTAINER.setAttribute("id", "p_1_container");
  P_1_LABEL.setAttribute("id", "p_1_label");
  P_1_SCORE.setAttribute("id", "p_1_score");
  P_2_CONTAINER.setAttribute("id", "p_2_container");

  document.body.prepend(GAME_CONTAINER);
  GAME_CONTAINER.append(SCORE_CONTAINER);
  SCORE_CONTAINER.append(P_1_CONTAINER);
  SCORE_CONTAINER.append(P_2_CONTAINER);
  P_1_CONTAINER.append(P_1_LABEL);
  P_1_CONTAINER.append(P_1_SCORE);
};

export { SCORE };
