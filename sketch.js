const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var back;
var astronaut;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move1.png", "move2.png");
  bath = loadAnimation("bath1.png", "bath2.png");
}

function setup() {
  createCanvas(800,630);

  astronaut = createSprite(400,310);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.15;

}

function draw() {
  background(bg);

  textSize(30);
  fill("white");
  text("Instructions",20,35);
  textSize(25);
  text("Up Arrow = Brushing", 20,70);
  text("Down Arrow = Gyming", 20,105);
  text("Right Arrow = Eating", 20,140);
  text("Left Arrow = Bathing", 20,175);
  text("M key = Moving", 20,210);

  drawSprites();

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 330;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 330;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 330;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 330;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}