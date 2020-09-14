// Day 5 of my generative art challenge
// Followed third concept of this tutorial:
// https://levelup.gitconnected.com/generative-art-3-fundamental-concepts-to-get-you-started-44205dae167b

const CANVAS_SIZE = 500;
const step = 30;
const finalSize = 2;
let startSteps;
const offset = 20;
const numTiles = 8;
const tileStep = (CANVAS_SIZE - offset * 2) / numTiles;
const startSize = tileStep;
const directions = [-0.5, 0, 0.5];
const TONES = ['#B5EAD7', '#FFDAC1', '#E2F0CB', '#FF9AA2', '#C7CEEA'];

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background('#697d73');
  stroke('#697d73');
  noLoop();
  strokeWeight(1.5);
}

drawSquare = (x, y, width, xDirection, yDirection, steps) => {
  fill(TONES[Math.floor(random(TONES.length))]);
  rect(x, y, width, width);

  if (steps >= 0) {
    const newSize = (startSize) * (steps / startSteps) + finalSize;
    let newX = x + (width - newSize) / 2;
    let newY = y + (width - newSize) / 2;
    newX = newX - ((x - newX) / (steps + 1)) * xDirection;
    newY = newY - ((y - newY) / (steps + 1)) * yDirection;
    drawSquare(newX, newY, newSize, xDirection, yDirection, steps - 1);
  }
};

function draw() {
  for (let x = offset; x < CANVAS_SIZE - offset; x += tileStep) {
    for (let y = offset; y < CANVAS_SIZE - offset; y += tileStep) {
      startSteps = 3 + Math.ceil(random(3));
      const xDirection = directions[Math.floor(random(directions.length))];
      const yDirection = directions[Math.floor(random(directions.length))];
      drawSquare(x, y, startSize, xDirection, yDirection, startSteps);
    }
  }
}
