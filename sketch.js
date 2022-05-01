var backgroundImg
var hunterImg
var bgko
var shooter
function preload(){
backgroundImg= loadImage('assets/bg.jpeg')
hunterImg= loadImage('assets/shooter_1.png')
}

function setup(){
createCanvas(windowWidth,windowHeight)
bgko=createSprite(windowWidth/2,windowHeight/2)
bgko.addImage(backgroundImg)

shooter=createSprite(windowWidth-1000,windowHeight-100)
shooter.addImage(hunterImg)
shooter.scale=0.4
}

function draw(){
  background(0)

  drawSprites()
}