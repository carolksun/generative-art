// Day 2 of my generative art challenge
// Followed this tutorial:
// https://blog.kadenze.com/creative-technology/p5-js-crash-course-recreate-art-you-love/

speed = 0.03;
maxCircleSize = 15;
numRows = 10;
numCols = 21;
numStrands = 3;
let colorA;
let colorB;

function setup() {
  createCanvas(500, 500);
  noStroke();
  colorB = color(52, 235, 180);
  colorA = color(62, 160, 240);
}

function draw() {
  background(20, 58, 89);
  const phase = frameCount * speed;

  for (let strand = 0; strand < numStrands; strand += 1) {
    const strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

    for (let col = 0; col < numCols; col += 1) {
      const colOffset = map(col, 0, numCols, 0, TWO_PI);
      const x = (width - 100) * col / (numCols - 1) + 50;
      for (let row = 0; row < numRows; row += 1) {
        const y =
          height / 2 - 50 + row * 10 + sin(strandPhase + colOffset) * 50;
        const sizeOffset =
          (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        const circleSize = sizeOffset * maxCircleSize;
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}
