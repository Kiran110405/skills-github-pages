
let r;
let g;
let b;

function setup() {
  createCanvas(400, 400);
  background(220);
  
  r = random(225);
  g = random(225);
  b = random(225);
  
}

function draw() {
  background(0,8);
  fill(0,150,300);
  rectMode(CENTER);
 
  let mx=noise(frameCount/30)*width;
  let my=noise(frameCount/35)*height;

  let w=random(5,40);
  let h=random(5,40);
  let x=random(-50,50);
  let y=random(-50,50);
  
  r += random(-10,10) ;
  g += random(-10,10);
  b += random(-10,10);
  
  r = constrain(r, 0, 225)
  g = constrain(g, 0, 225)
  b = constrain(b, 0, 225)
  
  fill(r, g, b);
  stroke(r, g, b);
 
  let a=noise(frameCount/150)*TWO_PI;

  translate(mx, my);
  rect(x, y, w, h, r, g, b);
  
}