const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles   = [];
var plinkos     = [];
var divisions   = [];
var divisionHeight = 300;

function setup() {
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    createSprite(400, 200, 50, 50);
    for(var k = 0;k<=width;k=k+80) {
        divisions.push(new GroundOrDivision(k, height-divisionHeight/2,10,divisionHeight));
    }
    for(var j=40;j<=width;j=j+50) {
        plinkos.push(new Plinko(j,75,20));
    }
    for(var o=15;o<=width;o=o+50) {
        plinkos.push(new Plinko(o,150,20));
    }
    for(var p=40;p<=width;p=p+50) {
        plinkos.push(new Plinko(p,225,20));
    }
    for(var q=15;q<=width;q=q+50) {
        plinkos.push(new Plinko(q,300,20));
    }
    ground = new GroundOrDivision(width/2, height, width, 10 )
}

function draw() {
    background(0);  
    for(var l=0;l<divisions.length;l++){
        divisions[l].display();
    }
    for(var m=0;m<plinkos.length;m++){
        plinkos[m].display();
    }
    if(frameCount%60===0) {
        particles.push(new Particle(random(width/2-10,width/2+10),10,20));
        //particles[particles.length].display();
    }
    for(var n=0;n<particles.length;n++){
        particles[n].display();
    }
    drawSprites();

    Engine.update(engine);
}