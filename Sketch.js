let snake;
let food;
let defaultFrameRate = 10;
function setup()
{
  createCanvas(600,600);
  frameRate(defaultFrameRate);
  snake = new Snake();
  food = new Food();
}
function draw()
{
  background(220);
  textSize(40)
  text(snake.Score,550,590);
  food.show();
  snake.update();
  snake.show();
  if(snake.dead())
  {
  	background(255,0,0);
    textSize(70);
    text("YOU LOSE",10,floor(height/4));
    text("YOUR SCORE : " + snake.Score,10,height/2);
    textSize(40);
    text("Refresh to Start again !",100,400);
    noLoop();
  }
  let d = dist(snake.body[snake.body.length-1].x,snake.body[snake.body.length-1].y,food.x,food.y);
  if(d < 5){
    defaultFrameRate +=  defaultFrameRate;
    frameRate(defaultFrameRate);
    snake.eat(food);    
  }
}
function keyPressed()
{
  if(keyCode == UP_ARROW)
    snake.move(0,-3);
  else if(keyCode == DOWN_ARROW)
    snake.move(0,3);
  else if(keyCode == RIGHT_ARROW)
    snake.move(3,0);
  else if(keyCode == LEFT_ARROW)
    snake.move(-3,0);
}
