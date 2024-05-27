

let img;

function preload(){
  img = loadImage('assets/avengers.jpeg')
}

function setup() {
  createCanvas(400, 400);
  img.resize(windowWidth, 0);
  createCanvas(img.width, img.height);
  noLoop()
}

function draw() {
  background(220);
  image(img,0,0)
     filter(INVERT);
  
}