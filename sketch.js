
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,ground,backgroundimg,tree,sling,stone;

var mango1,mango2,mango3,mango4,mango5,
mango6,mango7,mango8,mango9,mango10,
mango11,mango12,mango13,mango14,mango15;
function preload()
{
	backgroundimg=loadImage("bg1.jpg");
}

function setup() {
	createCanvas(1366,620);


	engine = Engine.create();
	world = engine.world;
boy=new Boy(300,540,20,20);
ground=new Ground(width/2,610,width,20);
tree = new Tree(1000,320,50,50)
stone=new Stone(300,580,48.3,39.3)
sling = new Sling(stone.body,boy.body,-65,-80)
mango1=new Mango(780,265,48.2,60)
mango2=new Mango(947,133,48.2,60)
mango3=new Mango(1050,230,48.2,60)
mango4=new Mango(1084,267,48.2,60)
mango5=new Mango(1000,96,48.2,60)
mango6=new Mango(890,75,48.2,60)
mango7=new Mango(850,213,48.2,60)
mango8=new Mango(1300,274,48.2,60)
mango9=new Mango(1460,267,48.2,60)
mango10=new Mango(1209,200,48.2,60)
mango11=new Mango(1000,240,48.2,60)
mango12=new Mango(1200,263,48.2,60)
mango13=new Mango(1102,159,48.2,60)
mango14=new Mango(923,267,48.2,60)
mango15=new Mango(1000,45,48.2,60)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);
  push()
  textFont("calligraphy")
  strokeWeight(2)
  fill("black")
  textSize(20)
  text("Press space to get a second chance!!",160,400);
  pop()

  push()
  textFont("cookie")
  fill("red")
  textSize(30)
  text("Wishing you all good things in this New Year!",100,100);
  text("Have fun, joy, peace, luck and success ahead!",100,150);
  pop()

  push()
  textFont("Old English Text MT")
  fill("blue")
  textSize(40)
  text("happy New Year 2021!!",180,200);
  pop()

  push()
  textFont("Algerian")
  stroke(4)
  fill("yellow")
  textSize(40)
  text("~ Anaad",400,260);
  pop()
  boy.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9) 
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  detectCollision(stone,mango12)
  detectCollision(stone,mango13)
  detectCollision(stone,mango14)
  detectCollision(stone,mango15)


 sling.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
      
  }
  function mouseReleased(){
      sling.release()
  }
  function keyPressed(){


      if(keyCode===32){
        Matter.Body.setPosition(stone.body,{x:235,y:500})
  sling.attach(stone.body)
      }}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=lmango.radius+lstone.radius){
Matter.Body.setStatic(lmango.body,false)
}

}