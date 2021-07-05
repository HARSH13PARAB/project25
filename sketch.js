
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj;


function preload(){
    paperObj=loadImage("paper.png")
	dustbinObj=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,670,width,20);
	dustbinObj = new dustbin(1200,650);
    paperObj = new paper(100,100); 
    var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

  groundObject.display();
  dustbinObj.display();
  paperObj.display();
  
}

