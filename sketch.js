
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3;
var paper;
var ground;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1= new Dustbin(1350,650,50,20);
	bin2= new Dustbin(1430,650,20,50);
	bin3= new Dustbin(1290,650,20,50);
	ground= new Ground(750,690,1500,10);
	paper= new Paper(50,680,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
}



