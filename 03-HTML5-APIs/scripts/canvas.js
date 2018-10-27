var animation = window.setInterval(animate, 0.25);


function draw() {
  const canvas = document.getElementById('canvas-draw');
  const context = canvas.getContext('2d');

  //triangle
  context.fillStyle = randomColor();
  context.beginPath();
  context.moveTo(500, 500);
  context.lineTo(600, 500);
  context.lineTo(550, 700);
  context.lineTo(500, 500);
  context.fill();

  //circle  
  context.fillStyle = randomColor();
  context.strokeStyle = randomColor();
  context.beginPath();
  context.arc(700, 350, 100, 0, Math.PI * 2, true);
  context.stroke();
  context.fill();

}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')'; //generating random color for strokes and fills
}

var x = 50;
var posx = 50;
const rectangleColor = randomColor();
const strokeColor = randomColor();

function animate() {
  const canvas = document.getElementById('canvas-draw');
  const context = canvas.getContext('2d');

  context.clearRect(0, 0, 1000, 250);

  //rectangle
  context.fillStyle = rectangleColor;
  context.strokeStyle = strokeColor;
  context.fillRect(x, 50, 200, 150);
  context.clearRect(x, 60, 90, 50);
  context.strokeRect(x, 60, 40, 20);


  //Defining movement loop
  if (posx < 350) {
    x++;
    posx++;
  }
  else {
    x--;
    posx++;
    if (x === 50) {
      posx = 50;
    }
  }
}
