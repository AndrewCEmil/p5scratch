let width = 1600;
let height = 900;
var x_points = 50;
var y_points = 50;
var point_width = 50;
var random_width = 30;
var radius = 10;
var grid = [];
var circles_in_stalk = 20;
function setup() {
  createCanvas(width, height);
  init_grid();
}

function draw() {
  clear();
  render_grid();
}

function render_grid() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      strokeWeight(1);
      draw_stalk(grid[i][j][0], grid[i][j][1]);
    }
  }
}

function draw_stalk(x, y) {
  var offset = get_offset(x, y);
  for (var i = 0; i < circles_in_stalk; i++) {
    circle(x - offset[0]*i, y - offset[1] * i, 10);
  }
}

function get_offset(x, y) {
  var mouse = [mouseX, mouseY];
  var diff =  [(mouseX - x) * .002, (mouseY - y) * .002];
  return diff;
}

function init_grid() {
  for (var i = 0; i < x_points; i++) {
    grid[i] = [];
  }
  for (var i = 0; i < x_points; i++) {
    for (var j = 0; j < y_points; j++) {
      var pt = new_point(i*point_width, j*point_width);
      grid[i][j] = pt;
    }
  }
}

function new_point(start_x, start_y) {
  var point = [random(random_width) + start_x, random(random_width) + start_y];
  return point;
}

function random_point() {
  let x = random(width);
  let y = random(height);
  strokeWeight(1);
  circle(x, y, radius);
  return [x,y];
}
