var playerPaddle, computerPaddle, ball, edges;
function setup(){
  createCanvas(400, 400);
  playerPaddle = createSprite (390, 10, 10, 50);
  computerPaddle = createSprite (10, 10, 10, 50);
  ball = createSprite (200, 200, 10, 10);
  edges = createEdgeSprites()
}
function draw() {
  background("cyan")
  if (keyDown("space")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  playerPaddle.y = World.mouseY;
  playerPaddle.x = 390;
  
  computerPaddle.y = ball.y;
  computerPaddle.x = 10;
  if (ball.x > 400 || ball.x < 0){
    computerPaddle.y = 150;
    computerPaddle.x = 10;
  }

  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites()
}
