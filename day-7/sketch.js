// Day 7 of my generative art challenge
// Inspiration from https://sasj.tumblr.com/post/628812510234132480/geometric-shapes-200909
// Wrote the code by myself
const COLORS = ['#d72631', '#a2d5c6', '#077b8a', '#5c3c92'];
const CANVAS_SIZE = 500;
const GAP = 30;
const WHITE_SPACE = 25;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  stroke('black');
  noLoop();
}

function draw() {
  background('#eee9f5');
  for (let y = 50; y <= 490; y += GAP) {
    for (let x = WHITE_SPACE; x < CANVAS_SIZE - WHITE_SPACE; x += GAP) {
      const xRandom = random([0, 15, 15, 15, 30]);
      const yRandom = random([5, 10, 15, 20, 25, 30]);
      fill(random(COLORS));
      triangle(x, y, x + xRandom, y - yRandom, x + GAP, y);
    }
  }
}
