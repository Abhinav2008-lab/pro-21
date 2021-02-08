var canvas;
var music;
var block1, block2, block3, block4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1 = createSprite(700,590,180,20);
    block2 = createSprite(500,590,180,20);
    block3 = createSprite(300,590,180,20);
    block4 = createSprite(100,590,180,20);

    box = createSprite(random(20,750),50,25,25);;

    block1.shapeColor = "blue";
    block2.shapeColor = "red"; 
    block3.shapeColor = "orange"; 
    block4.shapeColor = "green"; 

    box.shapeColor = "white"; 

    box.velocityX = -5;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();

    box.bounceOff(edges);
    //box.bounceOff(block1);
    //box.bounceOff(block2);
    //box.bounceOff(block4);

    if(block1.isTouching(box) && box.bounceOff(block1)){
       box.shapeColor = "blue";
    }

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor = "red";
        music.play();
     }

     if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor = "green";
     }

     if(block3.isTouching(box)){
         box.shapeColor = rgb(255,128,0);
         box.velocityX = 0;
         box.velocityY = 0;
         music.stop();
     }
    
    drawSprites();
}
