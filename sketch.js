const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var groundObj,base1,base2;
// base 1
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
//base2
var block18,block19,block20,block21,block22;
var block23,block24,block25;
var block26;
var polygon,polygon_img,slingShot;
var world,engine;

function preload(){
polygon_img = loadImage("polygon.png");
}

function setup() {
createCanvas(1000,400);

engine = Engine.create();
world = engine.world;
Engine.run(engine);

groundObj =new Ground();
base1 =new stand(390,300,250,10);
base2 =new stand(700,200,200,10);
//base1 bottom row
block1=new block(300,275,30,40);
block2=new block(330,275,30,40);
block3=new block(360,275,30,40);
block4=new block(390,275,30,40);
block5=new block(420,275,30,40);
block6=new block(450,275,30,40);
block7=new block(480,275,30,40);
//base1 third row
block8=new block(330,235,30,40);
block9=new block(360,235,30,40);
block10=new block(390,235,30,40);
block11=new block(420,235,30,40);
block12=new block(450,235,30,40);
//base1 2nd row
block13=new block(360,195,30,40);
block14=new block(390,195,30,40);
block15=new block(420,195,30,40);
//base1 top row
block16=new block(390,155,30,40);

//base2bottom row
block18=new block(640,175,30,40);
block19=new block(670,175,30,40);
block20=new block(700,175,30,40);
block21=new block(730,175,30,40);
block22=new block(760,175,30,40);
//base2 middle row
block23=new block(670,135,30,40);
block24=new block(700,135,30,40);
block25=new block(730,135,30,40);
//base 2 top row
block26=new block(700,95,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot=new Slingshot(this.polygon,{x:100,y:200});

}

function draw() {

background(125);  
groundObj.display();
base1.display();
base2.display();
//base1 bottom row
strokeWeight(2);
stroke(15);
fill("red");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
//base1 third row
fill("pink");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
//base1 2nd row
fill("yellow");
block13.display();
block14.display();
block15.display();
//base1 top row
fill("red");
block16.display();

//base2 bottom row
fill("pink");
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
//base2 middle row
fill("yellow");
block23.display();
block24.display();
block25.display();
//base 2 top row
fill("red");
block26.display();

imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
slingShot.display();

}

function mouseDragged(){
Matter.Body.setPosition(this.polygon, {x:mouseX , y:mouseY});
}
    
function mouseReleased(){
slingShot.fly();
}

function keyPressed(){ 
if(keyCode === 32){ 
slingShot.attach(this.polygon); 
} 
}