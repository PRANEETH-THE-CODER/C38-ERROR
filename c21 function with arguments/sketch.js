var fixedRect, movingRect;

function setup(){

  createCanvas(400,400);

  fixedRect = createSprite(300,200,40,300);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  
  movingRect = createSprite(200,200,100,40);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  box1 = createSprite(10,100,20,20);
  box1.shapeColor = "black";
  box1.velocityX = 3;

  box2 = createSprite(10,200,20,20);
  box2.shapeColor = "purple";
  box2.velocityX = 4;

  box3 = createSprite(10,200,20,20);
  box3.shapeColor = "pink";
  box3.velocityX = 2;

}

function draw(){
  background("grey");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //calling the function with arguments
  collide(fixedRect,box1)
  isTouching(fixedRect,movingRect)
  bounceOff(fixedRect,box2)
  bounceOff(fixedRect,box3)
  
  drawSprites();

}
