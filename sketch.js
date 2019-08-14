let x = 0;
let width = 1600;
let height = 900;
function setup() {
  createCanvas(width, height);
  random_points();
}

function draw() {
}

function random_points() {
  var num_points = 50;
  for (var i = 0; i < num_points; i++) {
    random_point();
  }
}

function random_point() {
  let x = random(width);
  let y = random(height);
  circle(x, y, 10);
}
