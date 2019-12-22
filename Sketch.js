var x;
var y;
var Score  = 0;
var IncreaseInPace = 0;
var GameIsOn = true;
var Snake = {
  x:25,
  y:25,
  SinX:0,
  SinY:0
};

var Food = {
  x:200,
  y:200
};

function setup() {
  createCanvas(400, 400); 
  frameRate(10);
}

function draw() {
  background(5);
  x = Food.x;
  y = Food.y;
  fill(255,0,0);
  noStroke();
  rect(Food.x,Food.y,15,15);
  fill(255,0,0,150);
  rect(0,0,600,15);
  rect(0,385,600,15);
  rect(0,0,15,600);
  rect(385,0,15,600);
  fill(255);
  rect(Snake.x,Snake.y,15,15);
  SnakeSetUp();
  GetOrNot();
}
function SnakeSetUp(){
    
  Snake.x += Snake.SinX;
  Snake.y += Snake.SinY;
  if(Snake.x >= 363 || Snake.y >=363){
    console.log("YOU LOSE !!!");
    Snake.SinX = 0;
    Snake.SinY = 0;
  }
  if(Snake.x <= 17 || Snake.y <= 17){
    console.log("YOU LOSE !!!");
    GameIsOn = false;
    Snake.SinX = 0;
    Snake.SinY = 0;
  }
  
}
function GetOrNot(){
  if(Snake.x == x && Snake.y == y){
    Score += 1;
    print("Score : " + Score);
    IncreaseInPace += 1;
    FoodLocation();
  }
}
function FoodLocation(){
  Food.x = Food.x + 25;
  Food.y = Food.y + 50;
  x = Food.x;
  y = Food.y;
}
function keyPressed() {
  if(GameIsOn == true){
   if(keyCode == UP_ARROW){
     Snake.SinY = -5 + -(IncreaseInPace);
     Snake.SinX = 0;
   }
   else if(keyCode == DOWN_ARROW){
     Snake.SinY = 5 + IncreaseInPace;
     Snake.SinX = 0;
   }
   else if(keyCode == RIGHT_ARROW){
     Snake.SinX = 5 + IncreaseInPace;
     Snake.SinY = 0;
   }
   else if(keyCode == LEFT_ARROW){
     Snake.SinX = -5 + -(IncreaseInPace);
     Snake.SinY = 0;
   }
  }
}
