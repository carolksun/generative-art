// Day 10 of my generative art challenge
// Just played around, no tutorial
const COLORS = ['ffe0e9', 'ff9ebb', 'ff7aa2', 'e05780', 'b9375e', '8a2846'];
const RADIUS_GAP = 60;
const CANVAS_SIZE = 500;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  noLoop();
  strokeWeight(4);
  background('#602437');
}

function circles(x, y, radius, npoints) {
  const angle = TWO_PI / npoints;
  const largerRadius = radius + RADIUS_GAP - 15;
  for (let a = 0; a < TWO_PI; a += angle) {
    const sx = x + cos(a) * radius;
    const sx2 = x + cos(a) * largerRadius;
    const sy = y + sin(a) * radius;
    const sy2 = y + sin(a) * largerRadius;
    line(sx, sy, sx2, sy2);
  }
}

function draw() {
  radiuses = [];
  for (let r = 10; r < CANVAS_SIZE; r += RADIUS_GAP) {
    radiuses.push(r);
  }
  for (let i = 0; i < radiuses.length - 1; i++) {
    const npoints = i == 0 ? 10 : radiuses[i] / 2;
    stroke('#' + COLORS[i]);
    circles(CANVAS_SIZE / 2, CANVAS_SIZE / 2, radiuses[i], npoints);
  }
}
