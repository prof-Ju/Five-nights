class Enemy{
     constructor(x,y){
          this.x = x;
          this.y = y;
          this.enemy = createSprite(x,y);
         // this.enemy.shapeColor = "deeppink";
          this.animationRight = loadAnimation(
               "./assets/enemyRight/enemy_right1.png",
               "./assets/enemyRight/enemy_right2.png",
               "./assets/enemyRight/enemy_right3.png"
          )

          this.animationLeft = loadAnimation(
              "./assets/enemyLeft/enemy_left1.png",
              "./assets/enemyLeft/enemy_left2.png",
              "./assets/enemyLeft/enemy_left3.png",
          )
          this.enemy.addAnimation("right",this.animationRight);
          this.enemy.addAnimation("left",this.animationLeft);
          this.enemy.scale = 2.5;


          this.velocitys = [-2, -3, 2, 3];
          this.selector = Math.round(random(this.velocitys));

          this.enemy.velocityX = this.selector;
          this.enemy.velocityY = 0;

          //criar limite para os inimigos
          
     }

     animationCorrection(){
          if(this.enemy.velocityX > 0){
               this.enemy.changeAnimation("right")
          }

          else{
               this.enemy.changeAnimation("left")
          }
     }

   

    
}

