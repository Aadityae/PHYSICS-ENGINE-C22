const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myworld, myengine
var object, ground;
var Ball, Ball2;


function setup() {
  createCanvas(400,400);

  myengine = Engine.create();

  myworld = myengine.world;

  var options = {
    isStatic: true
  }


ground = Bodies.rectangle(200,380,400,20,options)
World.add(myworld,ground);

console.log(ground);
//console.log(object.position.y)

var options = {
  restitution: 1.3
}
Ball = Bodies.circle(210,40,20,options)
World.add(myworld,Ball);
 
var options = {
  restitution: 1
}

Ball2 = Bodies.circle(100,100,12,options)
World.add(myworld,Ball2)
}

function draw() {
  background(0);  

  Engine.update(myengine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(Ball.position.x,Ball.position.y,20,20)

  ellipseMode(RADIUS)
  ellipse(Ball2.position.x,Ball2.position.y,12,12)
  
}