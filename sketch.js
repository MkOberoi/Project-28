
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone =new Stone (300,300,5);
	tree = new Tree(1050, 580,5,5);
    launcher = new Launcher(stone.body,{x:235,y:420});
    mango1 = new Mango(1100,100,30);
    mango2 = new Mango(1170, 130, 30);
    mango3 = new Mango(1010, 140, 30);
    mango4 = new Mango(1000, 70, 30);
    mango5 = new Mango(1100, 70, 30);
    mango6 = new Mango(1000, 230, 30);
    mango7 = new Mango(900, 230, 40);
	ground = new Ground(width/2,600,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  image("boy",200,340,200, 300);
  fill(0);
  text("Press Space to play again!", 650, 300);
  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcher.display();
  
  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	launcher.fly();
  }
  
  function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:240,y:435})
		launcher.attach(stone.body);
	}
  }
  
  function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distence=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distence<=lmango.r+lstone.r) {
	Matter.Body.setStatic(lmango.body,false)
  }
  }


