// Day 13 of my generative art challenge
// Followed https://github.com/b2renger/p5js_patterns/blob/master/art-deco_2/sketch.js
const slotWidth = 200;
const slotHeight = slotWidth * 1.3;
let marginX;
let marginY;

const dens = 6;

let pg1;
let pg2;

const c1 = '#ff8d85';
const c2 = '#edabe0';
const c3 = '#b2edab';
const c4 = '#c5c6fc';


function setup() {
  createCanvas(500, 500);

  marginX = 100;
  marginY = 100;

  pg1 = createGraphics(slotWidth, slotHeight);
  pg2 = createGraphics(slotWidth, slotHeight);
  generatePG(pg1, c1, c2);
  generatePG(pg2, c3, c4);
  noLoop();
}


function draw() {
  background(0);
  for (let y = 0; y < height + slotHeight; y += slotHeight) {
    for (let x = 0; x < width + slotWidth; x += slotWidth) {
      push();
      translate(x, y);
      image(pg1, 0, 0);
      pop();
    }
  }

  for (let y = -slotHeight; y < height + slotHeight; y += slotHeight) {
    for (let x = -slotWidth; x < width + slotWidth; x += slotWidth) {
      push();
      translate(x + slotWidth / 2, y + slotHeight / 2);
      image(pg2, 0, 0);
      pop();
    }
  }
}

function generatePG(pg, ca, cb) {
  let ind = 0;
  for (let i = -slotWidth; i <= slotWidth; i += int(slotWidth / dens)) {
    ind ++;
    pg.push();
    if (ind % 2 == 0) {
      pg.fill(ca);
    } else {
      pg.fill(cb);
    }
    pg.translate(slotWidth / 2, slotHeight / 2);
    pg.triangle(0, 0, i, -slotHeight, i + dens, -slotHeight);
    pg.triangle(0, 0, i, +slotHeight, i + dens, +slotHeight);
    pg.pop();
  }
}
