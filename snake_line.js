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
  createCanvas(width, height, WEBGL);
}

function draw() {
  clear();
  translate(-width/3,-height/4,0)
  var num_boxes = 10;
  for (var i = 0; i < num_boxes; i++) {
    rotateX(millis() / 1000);
    box(50, 50, 50);
    translate(width/(num_boxes),height/(num_boxes),0)
  }
}
