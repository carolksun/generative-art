// Day 15 of my generative art challenge
// Followed https://editor.p5js.org/p5/sketches/Image:_Pointillism
let img;
const pointSize = 4;

function preload() {
  img = loadImage('mountains.jpg');
}

function setup() {
  img.loadPixels();
  createCanvas(img.width, img.height);
  imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() {
  for (let i = 0; i < 100; i ++) {
    const x = floor(random(img.width));
    const y = floor(random(img.height));
    const pix = img.get(x, y);
    fill(pix);
    ellipse(x, y, pointSize, pointSize);
  }
}
