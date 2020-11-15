//namespacing : it just shortens up the name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var angryWorld;

var ground, ball;

function setup() {
    createCanvas(600, 600);

    myEngine = Engine.create();

    angryWorld = myEngine.world;

    var ball_properties = {
        restitution: 0.8
    }

    ball = Bodies.circle(width / 2, height / 2, 20, ball_properties);

    var ground_properties = {
        isStatic: true,
        density: 1.2
    }

    ground = Bodies.rectangle(width / 2, height, width, 50, ground_properties);

    World.add(angryWorld, ball);

    World.add(angryWorld, ground);

    Engine.run(myEngine);

    console.log(angryWorld);

}

function draw() {
    background("gray");

    ellipseMode(RADIUS);

    circle(ball.position.x, ball.position.y, 20);

    rectMode(CENTER);

    rect(ground.position.x, ground.position.y, width, 50);
}