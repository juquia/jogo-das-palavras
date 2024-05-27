let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(400, 400);
  background(color(100,0,0));
  cor=color(random(0,255),random(0,255),random(0,255));
  
  circuloX= [0,0,0];
  circuloY= [random(height), random(height), random(height)];
}

function draw() {
  fill(cor);
  circle(circuloX[0],circuloY[0],50);
  circle(circuloX[1],circuloY[1],50);
  circle(circuloX[2],circuloY[2],50);
   
  for(let contador in circuloX){
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3);
  
  if(circuloX[contador] >= width){
    circuloX[contador] = 0;
    circuloY[contador] = random(height);
  }
    
  }
  
  
  if(mouseIsPressed){
    cor=color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
}
