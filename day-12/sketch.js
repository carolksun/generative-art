// Day 12 of my generative art challenge
// Followed https://github.com/mattdesl/workshop-generative-art/blob/master/docs/exercises.md#generative-sol-lewitt-inspired-wall-drawing
const margin = 20;

function setup() {
  createCanvas(500, 500);
  stroke('white');
  strokeWeight(5);
  noLoop();
}

function drawShapes(shapes) {
  for (let i = 0; i < shapes.length; i ++) {
    const shape = shapes[i];
    fill('#' + shape.color);
    const p = shape.path;
    quad(p[0][0], p[0][1], p[1][0], p[1][1],
        p[2][0], p[2][1], p[3][0], p[3][1]);
  }
}

function draw() {
  background('white');
  const createGrid = () => {
    const xCount = 4;
    const yCount = 7;
    const points = [];
    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        const u = x / (xCount - 1);
        const v = y / (yCount - 1);
        const px = lerp(margin, width - margin, u);
        const py = lerp(margin, height - margin, v);
        points.push([px, py]);
      }
    }
    return points;
  };

  let grid = createGrid();
  const shapes = [];

  const colors =['ffcbf2', 'f3c4fb', 'ecbcfd', 'e5b3fe', 'e2afff', 'deaaff',
    'd8bbff', 'd0d1ff', 'c8e7ff', 'c0fdff', '7400b8', '6930c3', '5e60ce',
    '5390d9', '4ea8de', '48bfe3', '56cfe1', '64dfdf', '72efdd', '80ffdb'];
  while (grid.length > 2) {
    const pointsToRemove = shuffle(grid).slice(0, 2);
    if (pointsToRemove.length < 2) {
      break;
    }

    const color = colors.pop(random(colors.length));
    grid = grid.filter((p) => !pointsToRemove.includes(p));

    const [a, b] = pointsToRemove;

    shapes.push({
      color,
      path: [
        [a[0], height - margin],
        a,
        b,
        [b[0], height - margin],
      ],
      y: (a[1] + b[1]) / 2,
    });
  }
  shapes.sort((a, b) => a.y - b.y);
  drawShapes(shapes);
}

