
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.render;

var Ground,dustbin1,dustbin2,dustbin3,dustbin4,Paper;
var world;

function setup() {
	createCanvas(800, 415);

	engine = Engine.create();
	world = engine.world;

	 
	dustbin1 = new dustbin(400,375,180,10);
	dustbin2 = new dustbin(320,325,20,100);
  dustbin3 = new dustbin(505,328,20,105);
  dustbin4 = new dustbin(400,360,180,10);
  
  Paper = new paper(400,20,50/2);
  Ground = new ground(400,375,800,75);
  

  


	

      


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  

  background(100,100,550);
  


  Ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();

  Paper.display();
  
  down();

  drawSprites();
 
}

function down() {

 Paper.drop();

}