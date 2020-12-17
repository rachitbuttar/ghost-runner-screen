var GameState="play";
var tower,towerimg;
var ghost,ghostimg;
var door,doorimg,climber,climberimg,doorsgroup,climbersgroup;
var invisible,invisiblegroup;

function preload(){
  towerimg=loadImage("tower.png");
  ghostimg=loadImage("ghost-standing.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png")
}
function setup(){
createCanvas(600,600);  
  tower=createSprite(300,300,12,12);
  tower.addImage(towerimg);
  tower.velocityY=1;
  ghost=createSprite(200,150,60,60);
  ghost.addImage(ghostimg);
  ghost.scale=0.3;
  doorsgroup=new Group();
  climbersgroup=new Group();
  invisiblegroup=new Group();
}
function draw(){
  background(0);
  if(GameState==="play"){
    if(keyDown("space")){
      ghost.velocityY=-9;
    }
  ghost.velocityY=ghost.velocityY+0.7
    if(keyDown("right")){
      ghost.x=ghost.x+5
    }
    if(keyDown("left")){
      ghost.x=ghost.x-5
    }
  
  if(tower.y>400){
     tower.y=300;
      }
  spawndoors();
if(climbersgroup.isTouching(ghost)){ 
  ghost.velocityY = 0;
} 
    if(invisiblegroup.isTouching(ghost) || ghost.y > 600){ ghost.destroy(); GameState = "end"}
  }
   if(GameState==="end"){
  text("gameover",300,300);
          
          }
  drawSprites();
}
  function spawndoors(){
    if(World.frameCount%150===0){
      door=createSprite(200,-50,40,23);
      door.addImage(doorimg);
      door.velocityY=1;
      climber=createSprite(200,10,40,23);
      climber.addImage(climberimg);
      climber.velocityY=1;
      invisible=createSprite(200,15,40,10);
      door.x=Math.round(random(120,400));
      climber.x=door.x;
      invisible.velocityY=1;
      invisible.x=door.x;
      ghost.depth = door.depth;
      ghost.depth +=1;
      //assign lifetime to the variable
      door.lifetime = 800; climber.lifetime = 800; 
      invisible.lifetime = 800;
      //add each door to the group 
      doorsgroup.add(door); 
      invisible.debug = true; 
      climbersgroup.add(climber); 
      invisiblegroup.add(invisible);
    }
    
    
  }