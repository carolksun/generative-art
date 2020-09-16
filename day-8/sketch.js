// Day 8 of my generative art challenge
// Just played around, no tutorial
const COLORS = ['ff99c8', 'fcf6bd', 'd0f4de', 'a9def9', 'e4c1f9'];

const CANVAS_SIZE = 500;
const WHITE_SPACE = 25;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  noLoop();
}

function polygon(x, y, radius, npoints) {
  const angle = TWO_PI / npoints;
  for (let a = 0; a < TWO_PI; a += angle) {
    const sx = x + cos(a) * radius;
    const sy = y + sin(a) * radius;
    stroke('#' + random(COLORS));
    line(sx, sy, 0, 0);
    line(sx, sy, 500, 500);
    line(sx, sy, 0, 500);
    line(sx, sy, 500, 0);
  }
}

function draw() {
  background('black');
  polygon(CANVAS_SIZE / 2, CANVAS_SIZE / 2, CANVAS_SIZE / 2 - WHITE_SPACE, 60);
}
