function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  fill(0,190,200)
  push()
  //translate(0,0,mouseX+200)
  rotateY(frameCount/100)
  sphere(100)
  pop()
}

