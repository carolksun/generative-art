// Day 13 of my generative art challenge
// Followed https://codepen.io/Jobarbo/pen/EmvEgv
let yoff = 0.0;

function setup() {
  createCanvas(500, 500);
  background('black');
  stroke('white');
}

function draw() {
  noFill();
  beginShape();

  let xoff = 0;
  for (let x = 0; x <= width; x += 5) {
    const y = map(noise(xoff, yoff), 0, 1, 1000, true) - 300;
    vertex(x, y);
    xoff += 0.02;
  }
  yoff += 0.0085;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}
