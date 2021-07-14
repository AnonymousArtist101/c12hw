var garden, rabbit, apple, leaf;
var gardenImg, rabbitImg, appleImg, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
 

garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.scale = 2;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  garden.velocityY = +4;

if(garden.y > 400){
  garden.y = 0; 
}

  spawnApples();
  spawnLeaves();

  drawSprites();
}


function spawnApples() {
  if (frameCount % 60 === 0) {
     apple = createSprite(200,50,40,10);
    apple.x = Math.round(random(10, 310));
    apple.addImage(appleImg);
    apple.velocityY = +4
    apple.lifetime = 150
    apple.scale = 0.05;
  }
  
    
   
  }

  function spawnLeaves() {
    if (frameCount % 50 === 0) {
       leaf = createSprite(200,50,40,10);
      leaf.x = Math.round(random(10, 310));
      leaf.addImage(leafImg);
      leaf.velocityY = +4
      leaf.lifetime = 150
      leaf.scale = 0.05;
    }
    
      
     
    }