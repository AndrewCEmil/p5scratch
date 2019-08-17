let width = 1600;
let height = 900;
var x_points = 50;
var y_points = 50;
var point_width = 50;
var random_width = 30;
var radius = 10;
var grid = [];
function setup() {
  createCanvas(width, height);
  init_grid();
}

function draw() {
  render_grid();
  update_grid();
}

function update_grid() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      grid[i][j] = update_point(grid[i][j], get_surrounding(i, j));
    }
  }
}

function update_point(current, surrounding) {
  var new_x = 0;
  var new_y = 0;
  for (var i = 0; i < surrounding.length; i++) {
    new_x = new_x + surrounding[i][0];
    new_y = new_y + surrounding[i][1];
  }
  new_x = new_x / surrounding.length;
  new_y = new_y / surrounding.length;
  return [new_x, new_y];
}

function get_surrounding(x, y) {
  var near = [];
  if (x > 0) {
    near.push(grid[x-1][y]);
  } else {
    near.push([0, grid[x][y][1]]);
  }

  if (x < grid.length - 1) {
    near.push(grid[x+1][y]);
  } else {
    near.push([grid.length * point_width, grid[x][y][1]]);
  }

  if (y > 0) {
    near.push(grid[x][y-1]);
  } else {
    near.push([grid[x][y][0], 0]);
  }
  if (y < grid[x].length - 1) {
    near.push(grid[x][y + 1]);
  } else {
    near.push([grid[x][y][0], grid[x].length * point_width]);
  }
  return near;
}

function render_grid() {
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      strokeWeight(1);
      circle(grid[i][j][0], grid[i][j][1], 10);
    }
  }
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
