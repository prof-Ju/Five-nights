var ground;
var player_luke;
var bgImg
var enemy1
var gameState = 0;
var bgMenu
var startButton
var logo
var musicBg
function preload(){
  bgImg = loadImage("assets/fundo.png")
  bgMenu = loadImage("assets/menu.jpg")
  musicBg = loadSound("assets/music.mp3")
  
}


function setup(){
  createCanvas(800,300)
  ground = createSprite(150,280,width * 6,20)

  player_luke = createSprite(400,250,20,80)
  player_luke.shapeColor = "cyan"

 enemy1 = new Enemy(150,230)
 enemy1.animationCorrection();

  startButton = createButton("PLAY");
  startButton.position(width/2 -300 , height/2+ 20);
  startButton.class("startButton")
  startButton.mouseClicked(startGame);
 

  logo = createImg("assets/logo.png")
  logo.position(width/2 -300 , height/2 - 140);
  logo.size(210,150)


 // musicBg.play();


}



function draw(){
  background(0)
  if(gameState === 0){
    image(bgMenu, 0,0, width,height);

  }
  

  if(gameState === 1){
    startButton.hide();
    logo.hide();

    image(bgImg, 0,0, width*5, height)
 
    player_luke.collide(ground)
  
    //movimento jogador
    if(keyDown(RIGHT_ARROW)){
      player_luke.x +=10
    }
    if(keyDown(LEFT_ARROW)){
      player_luke.x -=10
    }
  
    if(keyDown("space") && player_luke.y > 229 ){
      player_luke.velocityY -= 15
    }
    //GRAVIDADE
    player_luke.velocityY += 0.8
  
    //camera jogador
    camera.position.x = player_luke.x 
  
    //criar limite para a camera
    if(player_luke.x <= 400){
      camera.position.x = 400
    }
  
    if(player_luke.x >= 3595){
      camera.position.x = 3595
    }
  
    //criar limite para o jogador
  
    drawSprites()
  }
  
}


//inicia o jogo
function startGame(){
  gameState = 1; 
}