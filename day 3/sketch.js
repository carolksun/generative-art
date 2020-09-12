// Day 3 of my generative art challenge
// Followed first concept of this tutorial:
// https://levelup.gitconnected.com/generative-art-3-fundamental-concepts-to-get-you-started-44205dae167b


const CANVAS_SIZE = 500;
const NUM_ROWS = 20;
const STEP = 20;
const VARIANCE_FACTOR = 100;
const WHITE_SPACE = 50;
const TONES = [
  [207, 168, 224],
  [227, 159, 199],
  [245, 192, 184],
];

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  stroke('white');
  strokeWeight(2);
  noLoop();
}

function draw() {
  background('black');
  const lines = [];
  for (let i = 0; i < NUM_ROWS; i += 1) {
    const line = [];
    for (let j = WHITE_SPACE; j <= CANVAS_SIZE - WHITE_SPACE; j += STEP / 1.5) {
      const distanceToCenter = Math.abs(j - CANVAS_SIZE / 2);
      const variance =
        Math.max(CANVAS_SIZE / 2 - VARIANCE_FACTOR - distanceToCenter, 0);
      const point = {
        x: j,
        y: ((CANVAS_SIZE - 2 * WHITE_SPACE) * i / NUM_ROWS) +
            WHITE_SPACE + STEP - random(variance / 2),
      };
      line.push(point);
    }
    lines.push(line);
  }

  for (let i = 0; i < NUM_ROWS; i++) {
    beginShape();
    for (let j = 0; j < lines[i].length - 1; j += 2) {
      curveVertex(lines[i][j].x, lines[i][j].y);
      const [r, g, b] = TONES[floor(random(TONES.length))];
      fill(r, g, b);
      curveVertex(lines[i][j + 1].x, lines[i][j + 1].y);
    }
    endShape();
  }
}
