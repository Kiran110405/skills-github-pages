let pic;

function preload() {
  pic = loadImage('Car.jpeg');
}

function setup() {
  createCanvas(600, 400);
  colorMode(HSB)
  image(pic, 0, 0);
}

function draw() {
  background(pic);
  
  tint(frameCount*10%360,500,200)
  
}