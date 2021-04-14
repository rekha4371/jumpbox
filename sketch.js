var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

box1 = createSprite(100, 580, 150, 20);
box2 = createSprite(300, 580, 150, 20);
box3 = createSprite(500, 580, 150, 20);
box4 = createSprite(700, 580, 150, 20);
box1.shapeColor = ("green")
box2.shapeColor = ("blue")
box3.shapeColor = ("red")
box4.shapeColor = ("orange")



    //create box sprite and give velocity

ball = createSprite(360, 100, 30, 30);
ball.velocityY = 10;
ball.velocityX = -15;

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor ="green"
        music.play();
    }
    
    if(box2.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    drawSprites();
}
