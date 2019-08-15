let x = 0;
let width = 1600;
let height = 900;
function setup() {
  createCanvas(width, height);
  sun_beams();
}

function draw() {
}

function sun_beams() {
  var num_beams = 500;
  for (var i = 0; i < num_beams; i++) {
    var newest = random_point();
    strokeWeight(3);
    line(0, 0, newest[0], newest[1]);
  }
}

function random_point() {
  let x = random(width);
  let y = random(height);
  strokeWeight(1);
  circle(x, y, 10);
  return [x,y];
}
