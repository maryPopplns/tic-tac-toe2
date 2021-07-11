function home() {
  const HOME = document.createElement("main");
  const SCRIPT_FILE = document.querySelector("#app");
  HOME.setAttribute("id", "home");
  document.body.prepend(HOME);
}

export { home };
