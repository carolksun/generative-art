// Day 11 of my generative art challenge
// Exercise from https://github.com/mattdesl/workshop-generative-art/blob/master/docs/exercises.md#generative-poster-designs
const CANVAS_SIZE = 500;
const ARC_STARTS = [0, 90, 180, 270];
const WHITE_SPACE = 100;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  fill('black');
  noStroke();
  noLoop();
  background('#B5EAD7');
}

function randomArc(x, y, diameter) {
  const start = random(ARC_STARTS);
  arc(x, y, diameter, diameter, radians(start), radians(start) + radians(270));
}

function draw() {
  for (let i = WHITE_SPACE; i <= CANVAS_SIZE - WHITE_SPACE; i += 50) {
    for (let j = WHITE_SPACE; j <= CANVAS_SIZE - WHITE_SPACE; j += 50) {
      randomArc(i, j, 40);
    }
  }
}
