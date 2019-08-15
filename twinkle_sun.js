let x = 0;
let width = 1600;
let height = 900;
let beams = [];
function setup() {
  createCanvas(width, height);
  init_sun_beams();
  render_beams();
}

function draw() {
  twinkle_beams();
  clear();
  render_beams();
}

function render_beams() {
  for (var i = 0; i < beams.length; i++) {
    strokeWeight(1);
    circle(beams[i][0], beams[i][1], 10);
    strokeWeight(3);
    line(0, 0, beams[i][0], beams[i][1]);
  }
}

function twinkle_beams() {
  var num_to_twinkle = 15;
  for (var i = 0; i < num_to_twinkle; i++) {
    beams.shift();
    create_beam();
  }
}

function init_sun_beams() {
  var num_beams = 500;
  for (var i = 0; i < num_beams; i++) {
    create_beam()
  }
}

function create_beam() {
  var newest = random_point();
  beams.push(newest);
}
function random_point() {
  let x = random(width);
  let y = random(height);
  return [x,y];
}
