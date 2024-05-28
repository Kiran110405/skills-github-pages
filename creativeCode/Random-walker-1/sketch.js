let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  
  r = random(225);
  g = random(225);
  b = random(225);
  
  background(32);
}

function draw() {
  
  let netX = x + random(-20,20);
  let netY = y + random(-20,20);
  
  netX = constrain(netX, 0, width)
  netY = constrain(netY, 0, height)
  
  r += random(-10,10) ;
  g += random(-10,10);
  b += random(-10,10);
  
  r = constrain(r, 0, 225)
  g = constrain(g, 0, 225)
  b = constrain(b, 0, 225)
  
  stroke(r,g,b);
  line(x, y, netX, netY);
  
 x = netX
 y = netY
}