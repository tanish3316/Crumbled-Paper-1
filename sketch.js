
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    ball1 = new Ball(50,200,15)
	ground1 = new ground(200,400,1500,20)
	box1 = new Box(750,380,20,100)
	box2 = new Box(650,380,200,20)
	box3 = new Box(550,380,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:-15})
	}
}



