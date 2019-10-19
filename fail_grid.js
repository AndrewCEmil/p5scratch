let width = 1600;
let height = 900;
var x_points = 5;
var y_points = 5;
var point_width = 50;
var random_width = 30;
var radius = 10;
var grid = [];
var new_grid = [];
function setup() {
  createCanvas(width, height);
  init_grid();
  render_grid("rgb(255,0,0)");
}

function draw() {
  update_grid();
  render_grid("rgb(0,0,0)");
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
      var pt = update_point(grid[i][j], get_surrounding(i, j, grid));
      new_grid[i][j][0] = pt[0];
      new_grid[i][j][1] = pt[1];
    }
  }
  grid = new_grid;
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

  console.log("current:");
  console.log(current);
  console.log("new:");
  console.log([new_x, new_y]);
  console.log("surrounding:");
  console.log("" + surrounding);

  return [new_x, new_y];
}

//This function is fucked and dumb
function get_surrounding(x, y) {
  var near = [];
  //console.log("TOP of surrounding");
  if (x > 0) {
    //console.log("x>0");
    //console.log(grid[x-1][y]);
    //console.log("end");
    near.push(grid[x-1][y]);
  } else {
    near.push([-1*grid[x][y][0], grid[x][y][1]]);
  }
  //console.log(near);


  if (x < grid.length - 1) {
    near.push(grid[x+1][y]);
  } else {
    var width = grid.length * point_width;
    var dist_to_end = width - grid[x][y][0];
    near.push([grid[x][y][0] + 2 * dist_to_end, grid[x][y][1]]);
  }
  //console.log(near);

  if (y > 0) {
    near.push(grid[x][y-1]);
  } else {
    near.push([grid[x][y][0], -1*grid[x][y][1]]);
  }
  //console.log(near);

  if (y < grid[x].length - 1) {
    near.push(grid[x][y + 1]);
  } else {
    var width = grid[x].length * point_width;
    var dist_to_end = width - grid[x][y][1];
    near.push([grid[x][y][0], grid[x][y][1] + 2 * dist_to_end]);
  }
  //console.log(near);

  //console.log("END of surrounding");
  return near;
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
      var pt = new_point(i*point_width, j*point_width);
      grid[i][j] = pt;
      new_grid[i][j] = pt;
    }
  }
}

function new_point(start_x, start_y) {
  var point = [random(random_width) + start_x, random(random_width) + start_y];
  return point;
}
