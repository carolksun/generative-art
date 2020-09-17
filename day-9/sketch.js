// Day 9 of my generative art challenge
// Based on https://p5js.org/examples/math-sine-wave.html
const XSPACING = 16;
const AMPLITUDE = 75;
const PERIOD = 500;
const CANVAS_SIZE = 500;
let w;
let theta = 0.0;
let dx;
let yvalues;
const colors = ['ffadad',
  'ffd6a5',
  'fdffb6',
  'caffbf',
  '9bf6ff',
  'a0c4ff',
  'bdb2ff',
  'ffc6ff',
  'fffffc'];


function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  w = width + XSPACING;
  dx = (TWO_PI / PERIOD) * XSPACING;
  yvalues = new Array(floor(w / XSPACING));
}

function draw() {
  background(0);
  calcWave();
  for (let i = -AMPLITUDE; i <= CANVAS_SIZE + AMPLITUDE; i += 25) {
    renderWave(i);
  }
}

function calcWave() {
  theta += 0.03;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * AMPLITUDE;
    x += dx;
  }
}

function renderWave(yPosition) {
  noStroke();
  fill('#' + random(colors));
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, yPosition + yvalues[x], 16, 16);
  }
}
