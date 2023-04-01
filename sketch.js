
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shrimpButton , shrimpButtonImg;
var shrimps = []
var ocean , oceanImg;
var score = 0

function preload(){

  oceanImg = loadImage("ocean.jpg");
  

}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;
//  shrimp = new Shrimp(200,200, 200, 100);

  ShrimpButton = createImg('shrimp button.png');
  ShrimpButton.position(30,30);
  ShrimpButton.size(65,65);
 // ShrimpButton.mouseClicked(drop);
 }

function draw() 
{
  background(51);
  image(oceanImg,0,0,width,height);
  Engine.update(engine);

  /*for (var i = 0; i < shrimp; i++) {
    showShrimp(shrimp[i], i);
  }
  
 shrimp.display()

 drawSprites()*/
 
}

/*function drop(){
  Matter.Body.applyForce(shrimp,{x:0,y:0},{x:0,y:+0.05})
  shrimp.display()
}*/

/*function showShrimp(shrimp, index) {
  if (shrimp) {
    shrimp.display();
    Matter.Body.applyForce(shrimp,{x:0,y:0},{x:0,y:+0.05})
  shrimp.visible = true
  
  }
}*/

