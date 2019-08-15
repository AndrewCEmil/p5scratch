let x = 0;
let width = 1600;
let height = 900;
function setup() {
  createCanvas(width, height);
  random_lines();
}

function draw() {
}

function random_lines() {
  var num_arcs = 50;
  var points = [];
  for (var i = 0; i < num_arcs; i++) {
    var newest = random_point();
    console.log("newest: ");
    console.log(newest);
    console.log("points");
    console.log(points);
    for (var j = 0; j < points.length; j++) {
      line(points[j][0], points[j][1], newest[0], newest[1]);
    }
    points.push(newest);
  }
}

function random_point() {
  let x = random(width);
  let y = random(height);
  circle(x, y, 10);
  return [x,y];
}
