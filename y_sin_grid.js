let width = 1600;
let height = 900;
var x_points = 5;
var y_points = 5;
var point_width = 50;
var random_width = 30;
var radius = 10;
var grid = [];
var new_grid = [];
var step = 0;
function setup() {
  createCanvas(width, height);
  init_grid();
  render_grid("rgb(255,0,0)");
}

function draw() {
  if (frameCount < 10000) {
    clear();
    update_grid();
    render_grid("rgb(0,0,0)");
  }
}

function print_grid() {
  for (var i = 0; i < grid.length; i++) {
    var line = ""
    for (var j = 0; j < grid[i].length; j++) {
      line = line + "| " + grid[i][j];
    }
    console.log(line);
  }
}


function update_grid() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      //Copy points over
      var pt = update_point(i, j);
      new_grid[i][j][0] = pt[0];
      new_grid[i][j][1] = pt[1];
    }
  }
  grid = new_grid;
}

function update_point(x, y) {
  var y_percent = (y / y_points) * TWO_PI;
  var t = frameCount * 0.1;
  var initial = get_initial(x, y);
  initial[1] = sin(t + y_percent) * .5 * point_width + initial[1];
  return initial;
}

function render_grid(fill_v) {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      strokeWeight(1);
      fill(fill_v);
      circle(grid[i][j][0], grid[i][j][1], 10);
    }
  }
}

function init_grid() {
  for (var i = 0; i < x_points; i++) {
    grid[i] = [];
    new_grid[i] = [];
  }
  for (var i = 0; i < x_points; i++) {
    for (var j = 0; j < y_points; j++) {
      var pt = get_initial(i, j);
      grid[i][j] = pt;
      new_grid[i][j] = pt;
    }
  }
}

function get_initial(x, y) {
  return [x * point_width, y * point_width];
}
