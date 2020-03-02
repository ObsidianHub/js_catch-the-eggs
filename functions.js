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

function set_egg_to_initial_position(egg) {
  egg.css("top", egg_initial_position);
}

function show_bulls_eye(egg) {
  bullseye_num = egg.attr("data-bullseye");
  $("#bullseye" + bullseye_num).show();
  hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
  setTimeout(function() {
    $("#bullseye" + bullseye_num).hide();
  }, 800);
}

function decrement_life() {
  life--;
  life_span.text(life);
}
