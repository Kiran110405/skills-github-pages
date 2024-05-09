function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
text(frameCount%60,20,20) 
  background(220);
  fill(200,0,120)
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
    
  ambientLight(60, 60, 60);
  pointLight(100,220,800, locX, locY,600);
  push()
  //translate(0,0,mouseX+200)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientMaterial(250);
  torus(100,30,500)
  pop()
}
