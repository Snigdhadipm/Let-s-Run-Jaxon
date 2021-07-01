

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
   path = createSprite(200,200,400,50);
   path.addImage(pathImage);
   path.velocityY = 4;
   path.scale = 1.2;
   if(path.y > 400){
     path.y = height/2;
   }
}

function draw() {
  background(0);

}
