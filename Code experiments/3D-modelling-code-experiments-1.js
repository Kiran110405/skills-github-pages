function setup() {
    createCanvas(400, 400, WEBGL);
  }
  
  
  function draw() {
  text(frameCount%60,20,20) 
    background(220);
    fill(200,0,120)
    push()
    //translate(0,0,mouseX+200)
    rotateY(frameCount/100)
    rotateZ(frameCount/100)
    
       if(frameCount%20>10){
      fill(0,0,200)
    }else{
      fill(200,0,200)
    }
    
    box(100)
    pop()
  }