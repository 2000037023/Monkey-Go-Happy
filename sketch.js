//Global Variables
var monkey;
var monkeyImage;
var bananaImage;
var obstacleImage;
var obstacleImage;
var score;
var backImage;
var backgrounds;
var ground;
var stone, stoneimage;
  var score=0;

function preload(){
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
backImage = loadImage("jungle.jpg");
  stoneimage=loadImage("stone.png");
}


function setup() {
  createCanvas(800,400);
  backgrounds = createSprite(0,0,800,400);
  backgrounds.addImage(backImage);
  backgrounds.scale=1.5;
  backgrounds.x=backgrounds.width/2;
  backgrounds.velocityX=-4;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("monkey",monkeyImage);
  monkey.scale = 0.15;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  foodGroup=new Group();
  obstaclesGroup=new Group();
}

function spawnfood() {
 if(frameCount%80===0) {
   var Banana = createSprite(200,200,20,20);
  Banana.addImage(bananaImage);
  Banana.scale = 0.10;
   Banana.y=random(120,200);
   Banana.velocityX=-5;
   Banana.lifetime=300;
   monkey.depth=Banana.depth+1;
   foodGroup.add(Banana);
 }
}


function spawnobstacle() {
 if(frameCount%80===0) {
   var stone = createSprite(800,350,10,40);
  stone.addImage(stoneimage);
  stone.scale = 0.10
   stone.velocityX=-5;
   stone.lifetime=300;
   obstaclesGroup.add(stone);
 }
}
function draw(){
 background(150);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if (backgrounds.x<100) {
    backgrounds.x=backgrounds.width/2;
  }
  if (foodGroup.isTouching(monkey)){
   foodGroup.destroyEach(); 
    score = score+2;
  }
  switch (score) {
    case 10: monkey.scale=0.12;
      break;
    case 20:monkey.scale=0.14;
    break;
    case 30: monkey.scale=0.16;
      break;
      case 40:monkey.scale=0.18;
      break;
      default: break;
  }
  if (keyDown("space")) {
   monkey.velocityY = -5;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  spawnfood();
  spawnobstacle();
  if (obstaclesGroup.isTouching(monkey)){
   monkey.scale=0.08; 
  }
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
}



