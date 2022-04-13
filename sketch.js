const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  centre=new Ground(200,200,50,50)
 ball=new Ball(200,50,20)
 ball2=new Ball(200,50,30)

 button=createButton("Click Here")
 button.position(50,50)
 button.mouseClicked(Hforce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  centre.show();
  ball.show()
  ball2.show()
  Engine.update(engine);
}
function Hforce(){
  Matter.Body.applyForce(ball2.body, {x:0, y:0}, {x:-0.05, y:0});
}

