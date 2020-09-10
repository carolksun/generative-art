// Day 1 of my generative art challenge
// Followed this tutorial:
// https://medium.com/@theibbster/a-gentle-introduction-to-coding-by-making-generative-art-c7f0a7b744a6

canvasSize = 500;

function setup() {
  createCanvas(canvasSize, canvasSize);
  noLoop();
}

/**
 * Draws diagonal line in random direction. Uses x, y, and step to determine
 * coordinates for the line.
 * @param {*} x x1 position for line
 * @param {*} y y1 position for line
 * @param {*} step distance between the next column
 */
function drawRandomLine(x, y, step) {
  const spaceBetweenLines = 8;
  if (random() > 0.5) {
    strokeWeight(random() * step / 2);
    line(x + step - spaceBetweenLines, y, x, y + step - spaceBetweenLines);
  } else {
    strokeWeight(random() * step / 4);
    line(x, y, x + step - spaceBetweenLines, y + step - spaceBetweenLines);
  }
}

function draw() {
  background('#A0ECCD');
  const step = 22;
  for (let x = 0; x <= canvasSize; x += step) {
    for (let y = 0; y <= canvasSize; y += step) {
      strokeWeight(random() * step / 5);
      drawRandomLine(x, y, step);
    }
  }
}
