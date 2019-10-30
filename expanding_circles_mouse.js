let width = 1600;
let height = 1100;
var x_points = 25;
var y_points = 25;
var point_width = 50;
var random_width = 30;
var radius = 10;
var grid = [];
var new_grid = [];
var step = 0;
function setup() {
  createCanvas(width, height);
  init_grid();
  render_grid();
}

function draw() {
  if (frameCount < 10000) {
    clear();
    update_grid();
    render_grid();
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
      new_grid[i][j][2] = pt[2];
    }
  }
  grid = new_grid;
}

function update_point(x, y) {
  var center = [(x_points / 2) * point_width, (y_points / 2) * point_width];
  var initial = get_initial(x, y);
  var scale = mouseY / 20;
  initial[2] = (dist(grid[x][y][0], grid[x][y][1], center[0], center[1]) - ((frameCount * scale) % 255)) % 255;
  return initial;
}

function render_grid() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      strokeWeight(1);
      fill(grid[i][j][2]);
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
  return [x * point_width, y * point_width, 0];
}
