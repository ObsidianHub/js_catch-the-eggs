const screens = document.querySelectorAll(".screen"),
  choose_insect_btns = document.querySelectorAll(".choose-insect-btn"),
  start_btn = document.getElementById("start-btn"),
  game_container = document.getElementById("game-container"),
  timeEl = document.getElementById("time"),
  scoreEl = document.getElementById("score"),
  message = document.getElementById("message");

let seconds = 0,
  score = 0,
  selected_insect = {};

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up");
});
