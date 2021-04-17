const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world;
var dog1,  dog4, dog4;
var grass;
var girl;


function preload(){
grass=loadImage("grass.png");
}

function setup() {
  createCanvas(1200,1200);
  engine=Engine.create()
  world=engine.world
  num=Math.round(random(1,3))
  dog1=new Dog(100,200,300,200)
  dog2=new Dog(200,300, 400,300)
  dog3= new Dog (300,500, 600, 400)
  girl = new Girl(300,900,400,300)
}

function draw() {
  background(grass);  
  // dog1.display()
  // dog2.display()
  // dog3.display()

}