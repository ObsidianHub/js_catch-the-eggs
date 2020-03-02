$(document).on("mousemove", function(e) {
  basket.css("left", e.pageX);
});

function egg_down(egg) {
  egg_current_position = parseInt(egg.css("top"));
  egg.css("top", egg_current_position + speed);
}

function check_egg_hits_floor(egg) {
  if (collision(egg, floor)) {
    show_bulls_eye(egg);
    decrement_life();
    return true;
  }
  return false;
}
