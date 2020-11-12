const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new chupur(395,70,600,50);

	bob1 = new bob(195,600,50);
  	bob2 = new bob(295,600,50);
  	bob3 = new bob(395,600,50);
  	bob4 = new bob(495,600,50);
  	bob5 = new bob(595,600,50);

	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	rope2 = new Rope(bob2.body, roof.body, -200, 0);
	rope3 = new Rope(bob3.body, roof.body, -300, 0);
	rope4 = new Rope(bob4.body, roof.body, -400, 0);
	rope5 = new Rope(bob5.body, roof.body, -500, 0);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255, 102, 255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}



