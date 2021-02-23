const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var hero;
function preload() {
//preload the images here
backgroundImg=loadImage("images/GamingBackground.png");
}

function setup() {
  
  var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    
    hero = new Hero(200,200,80,80);
    fly = new Fly(hero.body,{x:500,y:50});
    box1 = new Box(900,100,70,70);
    box2 = new Box(1000,100,70,70);
    box3 = new Box(900,200,70,70);
    box4 = new Box(1000,200,70,70);
    box5 = new Box(900,300,70,70);
    box6 = new Box(1000,300,70,70);
    box7 = new Box(900,400,70,70);
    box8 = new Box(1000,400,70,70);
    box9 = new Box(900,500,70,70);
    box10 = new Box(1000,500,70,70);
    
}

function draw() {
  background(backgroundImg);
hero.display();
fly.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  
  
  }

