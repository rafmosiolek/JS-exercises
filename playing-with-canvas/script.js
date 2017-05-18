/** Hangman in Canvas **/
var canvas = document.getElementById('hangman');
console.log(canvas);
var context = canvas.getContext('2d');

function draw(){
  console.log("Drawing Hangman");
  clearCanvas();
  setColor('#000000');
  setLineWidth(20);
  drawGallows();
  drawHead();
  //drawBody();
  //drawRightHand();
  //drawLeftHand();
  //drawRightFoot();
  //drawLeftFoot();
}

function clearCanvas(){
  console.log("reset canvas");
  canvas.width = canvas.width;
}

function setColor(color) {
  console.log("set stroke color");
  context.strokeStyle = color;
}

function setLineWidth(width) {
  console.log("set line width");
  context.lineWidth = width;
}


function drawGallows() {
  context.beginPath();

  context.moveTo(350, 450);
  context.lineTo(10, 450);
  context.lineTo(70, 450);

  context.lineTo(70, 10);
  context.lineTo(200, 10);
  context.lineTo(200, 50);
  context.stroke();
}

function drawHead() {
  context.beginPath();

  context.arc(200, 100, 50, 0, Math.PI*2, true);
  context.closePath();
  context.lineWidth = "4";
  context.stroke();
}


function drawBody() {
  context.beginPath();

  context.moveTo(200, 150);


  context.stroke();
}

$(document).ready(function(){
  canvas = $('#hangman')[0];
  context = canvas.getContext("2d");

  draw();
});
