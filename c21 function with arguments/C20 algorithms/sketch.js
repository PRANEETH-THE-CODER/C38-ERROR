var fixedRect, movingRect;

function setup(){

  createCanvas(400,400);

  fixedRect = createSprite(200,200,40,100);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  
  movingRect = createSprite(200,200,100,40);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}

function draw(){
  background("grey");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 &&
  movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  
  drawSprites();

}