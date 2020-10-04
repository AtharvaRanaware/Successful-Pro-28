
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,boy,boyImg;
var tree,treeImg;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var throw1;

function preload()
{
	boyImg = loadImage("boy.png");
treeImg = loadImage("tree.png");

	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=createSprite(800,690,1600,20);


boy=createSprite(200,630,10,10);
boy.addImage(boyImg);
boy.scale=0.1



tree=createSprite(900,440,10,10);
tree.addImage(treeImg);
tree.scale=0.4

stone=new Stone(130,565,40);

mango1=new Mango(910,370,30);

mango2=new Mango(860,350,30);

mango3=new Mango(950,340,30);

mango4=new Mango(900,380,30);

mango5=new Mango(860,370,30);

mango6=new Mango(910,320,30);

mango7=new Mango(970,370,30);

mango8=new Mango(800,330,30);

mango9=new Mango(1100,380,30);

mango10=new Mango(1100,340,30);

mango11=new Mango(800,370,30);

mango12=new Mango(1000,350,30);

throw1 = new Throw(stone.body,{x:140,y:575});


//tree=new Tree(900,440,100,100);




  
}


function draw() {
 
  background("cyan");
  Engine.update(engine);

drawSprites();

 //tree.display();

 stone.display();

mango1.display();

mango2.display();

mango3.display();

mango4.display();

mango5.display();

mango6.display();

mango7.display();

mango8.display();

mango9.display();

mango10.display();

mango11.display();

mango12.display();

throw1.display();

 
detectCollision();

detectCollision(stone,mango1);

detectCollision(stone,mango2);

detectCollision(stone,mango3);

detectCollision(stone,mango4);

detectCollision(stone,mango5);

detectCollision(stone,mango6);

detectCollision(stone,mango7);

detectCollision(stone,mango8);

detectCollision(stone,mango9);

detectCollision(stone,mango10);

detectCollision(stone,mango11);

detectCollision(stone,mango12);


}



function mouseDragged () {

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	} 
	
	
	function mouseReleased () {
	
 throw1.fly();
	
	
	
	}

function detectCollision(lstone,lmango){

mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r){

Matter.Body.setStatic(lmango.body,false);


}


}

function keyPressed() {

if(keyCode===32) {

Matter.Body.setPosition(stone.body,{x:130,y:575})
throw1.attach(stone.body);


}

}

