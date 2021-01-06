
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 //Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground); 

	//Create the Bodies Here.
  bob1 = new bob(500,200,80,80);
  bob2 = new bob(600,200,80,80);
  bob3 = new bob(700,200,80,80);
  bob4 = new bob(800,200,80,80);
  bob5 = new bob(900,200,80,80);
  roof1 = new roof(70,100,1000,50);
  rope1 = new rope(bob1.body,roof1.body,0,0);
  rope2 = new rope(bob2.body,roof1.body,100,0);
  rope3 = new rope(bob3.body,roof1.body,200,0);
  rope4 = new rope(bob4.body,roof1.body,300,0);
  rope5 = new rope(bob5.body,roof1.body,400,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:900,y:-200});
}
  
}



