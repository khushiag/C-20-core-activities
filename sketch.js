var fixedRect, movingRect;

function setup() {
  createCanvas(1200, 800);
 fixedRect= createSprite(200, 460, 50, 80);
 fixedRect.shapeColor= "purple";
 fixedRect.velocityX= 2;
 
movingRect = createSprite(400, 460, 50, 80);
movingRect.shapeColor= "purple";
movingRect.velocityX= -2;
}

function draw() {
  background(255,255,255);  

  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX;
if(fixedRect.x- movingRect.x < fixedRect.width/2+ movingRect.width/2
  &&movingRect.x- fixedRect.x < fixedRect.width/2+ movingRect.width/2){
    fixedRect.velocityX= fixedRect.velocityX*-1;
    movingRect.velocityX= movingRect.velocityX* -1;
 
  }



  drawSprites();
}