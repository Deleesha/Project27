
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1,rope2,rope3,rope4,rope5;
var stand;
var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand = new Stand(400,200,400,20);
	ball1 = new Ball(400,400);
	ball2 = new Ball(450,400);
	ball3 = new Ball(500,400);
	ball4 = new Ball(550,400);
	ball5 = new Ball(600,400);
	console.log(ball1);
	rope1 = new Rope(ball1.body,stand.body,400,200);
	rope2 = new Rope(ball2.body,stand.body,450,200);
	rope3 = new Rope(ball3.body,stand.body,500,200);
	rope4 = new Rope(ball4.body,stand.body,550,200);
	rope5 = new Rope(ball5.body,stand.body,600,200);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");
  
 stand.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position , {x:500, y:-500});
	}
	


}

