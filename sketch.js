var bg
var bg1
var spaceship
var spaceship1
var enemy
var enemy1
var enemy2
var enemygroup

function preload(){
bg1=loadImage("bg.jpg")
spaceship1=loadImage("spaceship.png")

enemy=loadImage("enemy1.png")
enemy1=loadImage("asteroid1.png")
enemy2=loadImage("asteroid2.png")
}


function setup() {
  createCanvas(700,700);

  bg=createSprite(350, 350, 50, 50);
  bg.addImage(bg1)
  bg.scale=2

  spaceship=createSprite(350,600,50,50)
  spaceship.addImage(spaceship1)
  spaceship.scale=0.3

 // enemmygroup=createGroup()

}

function draw() {
 // background(255,255,255);  

  if(keyDown("UP_ARROW")){
    spaceship.velocityY=13
  }
  
  if(keyDown("DOWN_ARROW")){
    spaceship.velocityY=-13
  }

  if(keyDown("RIGHT_ARROW")){
    spaceship.velocityX=10
  }

  
  if(keyDown("LEFT_ARROW")){
    spaceship.velocityX=-10
  }



  drawSprites();
}