
var count
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating canvas
   createCanvas(500,500)
  //creatingMonkey
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,480,950,10)
  count=1
}


function draw() {
  background("yellow")
  if (keyDown("space")){
    monkey.velocityY=-10
  }
  
   monkey.velocityY += 0.8;
  monkey.collide(ground);
  food();
  obstacle();
  drawSprites();
  count=Math.round(frameCount/frameRate())
  text("survival" +count,100,50)
}
function food(){

  if(frameCount%150==0){
      banna=createSprite(500,random(100,300),20,20)
    banna.velocityX=-4
    banna.addImage( bananaImage )
    banna.scale=0.1
  }
}

function obstacle(){

  if(frameCount%150==0){
      obstacles=createSprite(500,470,100,100)
    obstacles.velocityX=-6
    obstacles.addImage( obstacleImage)
    obstacles.scale=0.1
  }
}



