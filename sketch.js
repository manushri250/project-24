
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin,dustbinn,dustbinnn;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(500,590,1000,20);

  dustbin = new Dustbin(750,height-27,300,15);
  dustbinn = new Dustbin(900,515,15,130);
  dustbinnn = new Dustbin(600,515,15,130);
  
  //papers = new Paper(300,300,50);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  dustbin.display();
  dustbinn.display();
  dustbinnn.display();

  //papers.display();
  
  drawSprites();
 
}



