// Day 6 of my generative art challenge
// Inspiration from https://sasj.tumblr.com/post/626728800007389184/geometric-shapes-200817
// Wrote the code by myself

const CANVAS_SIZE = 500;
const TOTAL_STEPS = 6;
const PINKS = ['#D714B8',
  '#DC32C3',
  '#E151CE',
  '#E770D9',
  '#EC8EE4',
  '#F1ADEF',
  '#F7CCFA'];
const ORANGES = ['#F9AD4D',
  '#F8B85F',
  '#F7C471',
  '#F6CF83',
  '#F5DB95',
  '#F4E6A7',
  '#F4F2B9'];

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  noLoop();
}

function draw() {
  for (let i = 0; i < 100; i ++) {
    const main = random() < 0.5 ? -1 : 1;
    const side = random() < 0.5 ? -1 : 1;
    const color = random() < 0.5 ? -1 : 1;
    const x = random(20, 480);
    const y = random(20, 480);
    const length = random(40, 400);
    strokeWeight(length / 10);
    drawPyramid(x, y, main, side, color, length, TOTAL_STEPS);
  }
}

const drawPyramid = (x, y, main, side, color, totalLength, steps) => {
  const length = totalLength * steps / TOTAL_STEPS;
  if (color == 1) {
    stroke(ORANGES[steps]);
  } else {
    stroke(PINKS[steps]);
  }

  if (main == 1) {
    line(x - length / 2, y, x + length / 2, y);
  } else {
    line(x, y - length / 2, x, y + length / 2);
  }

  if (steps > 0) {
    if (main == 1) {
      drawPyramid(x, y + side * totalLength / 10, main, side, color,
          totalLength, steps - 1);
    } else {
      drawPyramid(x + side * totalLength / 10, y, main, side, color,
          totalLength, steps - 1);
    }
  }
};
