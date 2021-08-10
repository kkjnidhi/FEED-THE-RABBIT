var garden,rabbit;
var gardenImg,rabbitImg;
var ai,apple,ol,oli,ss
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  ai=loadImage("apple.png")
oli=loadImage("orangeLeaf.png")
}
function setup(){ 
  createCanvas(400,400);
//garden
garden=createSprite(200,200);
garden.addImage(gardenImg);
//rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
//ss stands for select sprite
 
}
function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
   drawSprites();
    ss=Math.round (random(1,2))
 if (frameCount%80===0){
  if(ss===1){
  CREATEapples();}
  else if(ss===2){ 
   CREATEol();
 }
}
  }
function CREATEapples(){
  //apple
apple=createSprite((random(50,350)),40,10,10);

apple.addImage(ai);
apple.scale=0.1;
apple.velocityY=6
apple.lifetime = 350  
}
function CREATEol(){
ol=createSprite((random(50,350)),40,10,10);

ol.addImage(oli);
ol.scale=0.1;
ol.velocityY=6
ol.lifetime = 350  
}
