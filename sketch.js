var tom ,tomImage1 ,tomImage2;
var jerry ,jerryImage1 ,jerryImage2;
var bg

function preload() {
    //load the images here
tomImage1 = loadImage("images/cat1.png")
tomImage2 = loadAnimation("images/cat2.png","images/cat3.png")
tomImage4 = loadImage("images/cat4.png")
jerryImage1 = loadImage("images/mouse1.png")
jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
jerryImage3 = loadImage("images/mouse3.png")
jerryImage4 = loadImage("images/mouse4.png")
bg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(870,600);
tom.addImage(tomImage1)
tom.scale = 0.2

jerry = createSprite(200,600);
jerry.addImage(jerryImage1)
jerry.scale = 0.2


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x<tom.width/2-jerry.width/2){
 tom.velocityX = 0;
 tom.addImage("tomImage4",tomImage4);
 tom.changeAnimation("tomImage4");
 tom.x = 300;
tom.scale = 0.2
jerry.addAnimation("jerryImage4",jerryImage4)
jerry.changeAnimation("jerryImage4")
jerry.scale = 0.15
}

    drawSprites();
}


function keyPressed(){

if (keyCode === LEFT_ARROW){
tom.velocityX = -5;
tom.addAnimation("tomImage2",tomImage2);
tom.changeAnimation("tomImage2");
jerry.addAnimation("jerryImage3",jerryImage3);
jerry.frameDelay = 25
jerry.changeAnimation("jerryImage3")
}
  //For moving and changing animation write code here


}
