let width = 1600;
let height = 1100;
var grid_size = 1000;
var num_lines = 100;
function setup() {
  createCanvas(width, height, WEBGL);
}

function draw() {
  clear();
  outer_box();
  left_side();
}

function outer_box() {
  var top_left = -1 * grid_size / 2;
  var bottom_right = grid_size / 2;
  line(top_left, top_left, bottom_right, top_left);
  //line(0, 0, 1000, 0);
  line(bottom_right, top_left, bottom_right, bottom_right);
  //line(1000, 0, 1000, 1000);
  line(top_left, bottom_right, bottom_right, bottom_right);
  //line(0, 1000, 1000, 1000);
  line(top_left, top_left, top_left, bottom_right);
  //line(0, 0, 0, 1000);
}

function left_side() {
  for (var i = 0; i < num_lines; i++) {
    var cur = (-1 * grid_size / 2) + i * grid_size / num_lines;
    line(cur, 0, 0, -100);
  }
}
