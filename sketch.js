var seaImg, ship_sailing, ship_collided;
var ship,sea




function preload(){
seaImg = loadImage("sea.png");
ship_sailing = loadAnimation("ship-1.png","ship-2.png", "ship-3.png","ship-4.png")

}

function setup(){
background("blue")
  
 createCanvas(400,400);
  
//create a seaImg sprite
sea = createSprite(4000,200);
sea.addImage("sea",seaImg);
sea.velocityX=-4
sea.scale=0.3


//create a ship sprite
ship = createSprite(130,200,30,30);
ship.addAnimation("sailing", ship_sailing);
ship.scale = 0.25;




}


function draw() {
  
  background(0);
 
  sea.velocityX = -4;


//code to reset the background
if(sea.x < 0){
  sea.x = sea.width/2;
}
drawSprites() 
}


