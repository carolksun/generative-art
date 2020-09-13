// Day 4 of my generative art challenge
// Followed second concept of this tutorial:
// https://levelup.gitconnected.com/generative-art-3-fundamental-concepts-to-get-you-started-44205dae167b

const CANVAS_SIZE = 500;
const DENSITY = 20;
const TRIANGLE_SIZE = CANVAS_SIZE / DENSITY;
const HALF_TRIANGLE = TRIANGLE_SIZE / 2;
const STROKE_COLOR = 'white';
const MARGIN = 40;
const TONES = [
  [147, 121, 199],
  [199, 127, 212],
  [127, 147, 212],
];

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  stroke(STROKE_COLOR);
  noLoop();
  background('#353559');
}

function draw() {
  const lines = [];
  let odd = false;
  for (let y = TRIANGLE_SIZE; y < CANVAS_SIZE - MARGIN; y += TRIANGLE_SIZE) {
    odd = !odd;
    const coordinates = [];
    const oddFactor = odd ? HALF_TRIANGLE : 0;
    for (let x = HALF_TRIANGLE; x < CANVAS_SIZE - MARGIN; x += TRIANGLE_SIZE) {
      coordinates.push({
        x: x + random() * TRIANGLE_SIZE + oddFactor,
        y: y + random() * TRIANGLE_SIZE,
      });
    }
    lines.push(coordinates);
  }
  odd = true;
  for (let y = 0; y < lines.length - 1; y++) {
    odd = !odd;
    const triangle = [];
    for (let i = 0; i < lines[y].length; i++) {
      triangle.push(odd ? lines[y][i] : lines[y + 1][i]);
      triangle.push(odd ? lines[y + 1][i] : lines[y][i]);
    }
    for (let i = 0; i < triangle.length - 2; i++) {
      drawTriangle(triangle[i], triangle[i + 1], triangle[i + 2]);
    }
  }
}

const drawTriangle = (pointA, pointB, pointC) => {
  const randomIndex = Math.floor(random(TONES.length));
  const [r, g, b] = TONES[randomIndex];
  fill(r, g, b);
  triangle(pointA.x, pointA.y, pointB.x, pointB.y, pointC.x, pointC.y);
};
